import React, { useEffect, useState } from "react";

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

  const time = 2000;

  const fetchData = async () => {
    if (isLoaded && map) {
      const bounds = new window.google.maps.LatLngBounds(coordinates);
      map.fitBounds(bounds);
      setSolarIntensityData(null);
    }

    const buildingInsights = await GetBuildingInsights(coordinates);
    setSolarIntensityData(buildingInsights);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, map, coordinates]);

  return isLoaded ? (
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
  ) : (
    <></>
  );
}
