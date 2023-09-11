import React, { useEffect, useState, useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// Google Maps API
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// Helpers
import { renderSolarIntensityOverlay } from "@/app/helpers/helper";
import { GetBuildingInsights } from "@/api/GetBuildingInsights";

// Style Container Google
const containerStyle = {
  width: "100%",
  height: "100%",
};

interface Props {
  coordinates: {
    lat: number;
    lng: number;
  };
  marker: any;
}

export default function GoogleMapComponent({ coordinates, marker }: Props) {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [solarIntensityData, setSolarIntensityData] = useState<any | null>(
    null
  );

  const apiSecret = process.env.NEXT_PUBLIC_GOOGLE_SECRET_KEY || "secret";
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiSecret,
  });

  const onLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  const fetchData = async () => {
    try {
      if (isLoaded && map) {
        const bounds = new window.google.maps.LatLngBounds(coordinates);
        map.fitBounds(bounds);
        setSolarIntensityData(null);
      }

      const buildingInsights = await GetBuildingInsights(coordinates);
      setSolarIntensityData(buildingInsights);
    } catch (error) {
      toast.error("Erro ao buscar os Insights 😢", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, map, coordinates]);

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={8}
        onLoad={onLoad}
        options={{
          mapTypeId: "satellite",
        }}
      >
        <Marker position={coordinates} label={marker} />
        {renderSolarIntensityOverlay(solarIntensityData, coordinates)}
      </GoogleMap>

      <ToastContainer />
    </>
  ) : (
    <></>
  );
}
