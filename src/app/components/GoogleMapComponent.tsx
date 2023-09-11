import React, { useEffect, useState, useMemo } from "react";

// Google Maps API
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

// Helpers
import { renderSolarIntensityOverlay } from "@/app/helpers/helper";
import { GetBuildingInsights } from "@/api/GetBuildingInsights";

// Style Container Google
const containerStyle = {
  width: "100%",
  height: "800px",
};

export default function GoogleMapComponent(props: {
  coordinates: { lat: any; lng: any };
  marker: any;
}) {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [solarIntensityData, setSolarIntensityData] = useState(null);

  const apiSecret = process.env.NEXT_PUBLIC_GOOGLE_SECRET_KEY;
  const center = useMemo(() => {
    return {
      lat: props.coordinates.lat,
      lng: props.coordinates.lng,
    };
  }, [props.coordinates.lat, props.coordinates.lng]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiSecret || "secret",
  });

  const onLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  useEffect(() => {
    if (isLoaded && map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setSolarIntensityData(null);
    }

    const fetchData = async () => {
      const buildingInsights = await GetBuildingInsights(center);
      setSolarIntensityData(await buildingInsights);
    };

    fetchData();
  }, [isLoaded, map, center.lat, center.lng, center]);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
      onLoad={onLoad}
      options={{
        mapTypeId: "satellite",
      }}
    >
      <Marker position={center} label={props.marker} />
      {renderSolarIntensityOverlay(solarIntensityData, center)}
    </GoogleMap>
  ) : (
    <></>
  );
}
