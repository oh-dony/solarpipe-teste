import React, { useEffect, useState } from "react";
import { scaleSequential } from "d3-scale";
import { interpolateViridis } from "d3-scale-chromatic";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  OverlayView,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "800px",
};

// Função para calcular a cor com base na intensidade solar
const calculateColorFromIntensity = (intensity) => {
  // Defina a escala de cores com base na intensidade solar
  const colorScale = scaleSequential(interpolateViridis).domain([0, 1000]); // Intervalo de intensidade solar de 0 a 100 (ajuste conforme necessário)

  // Use a escala de cores para mapear a intensidade para uma cor
  return colorScale(intensity);
};

// Componente de Sobreposição de Intensidade Solar
const SolarIntensityOverlay = ({ solarPotential }) => {
  // Aqui, você pode calcular a cor da sobreposição com base na intensidade solar.
  // Suponhamos que você tenha uma função calculateColorFromIntensity que faz isso.

  const solarIntensityColor = calculateColorFromIntensity(
    solarPotential.maxSunshineHoursPerYear
  );

  const buildingInsights = [
    {
      title: "Intensidade solar: ",
      insight: solarPotential.maxSunshineHoursPerYear,
    },
    {
      title: "Metros² do local: ",
      insight: solarPotential.buildingStats.areaMeters2,
    },
    {
      title: "Capacidade de Watts por painel: ",
      insight: solarPotential.panelCapacityWatts,
    },
    {
      title: "Vida útil do painel em anos: ",
      insight: solarPotential.panelLifetimeYears,
    },
    {
      title: "Dimensões dos paineis altura/largura: ",
      insight:
        solarPotential.panelHeightMeters +
        " - " +
        solarPotential.panelWidthMeters,
    },
  ];

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: solarIntensityColor,
        width: "300px",
        height: "100px",
        // borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        fontWeight: "bold",
        opacity: 0.8,
        padding: 10,
      }}
    >
      <ul>
        {buildingInsights.map((insight, index) => (
          <li key={index}>
            <p>
              <b>{insight.title}</b>
              {insight.insight}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function GoogleMapComponent(center, marker) {
  console.log(marker);

  const teste = {
    lat: center.center.lat,
    lng: center.center.lng,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCSgovlnEMggBrOEOShYxJ8a9ruoBlSnEU", // Substitua pelo seu próprio API Key do Google Maps
  });

  const [map, setMap] = useState(null);
  const [solarIntensityData, setSolarIntensityData] = useState(null);

  const onLoad = (map) => {
    setMap(map);
  };

  useEffect(() => {
    if (isLoaded && map) {
      const bounds = new window.google.maps.LatLngBounds(teste);
      map.fitBounds(bounds);
      setSolarIntensityData(null);
      // Realize a solicitação de intensidade solar aqui e atualize o estado com os dados
      fetch(
        `https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=${teste.lat}&location.longitude=${teste.lng}&requiredQuality=HIGH&key=AIzaSyCSgovlnEMggBrOEOShYxJ8a9ruoBlSnEU`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Erro na solicitação de intensidade solar");
          }
          return response.json();
        })
        .then((data) => {
          setSolarIntensityData(data);
        })
        .catch((error) => {
          console.error("Erro na solicitação de intensidade solar:", error);
        });
    }
  }, [isLoaded, map, teste.lat, teste.lng]);

  const onUnmount = () => {
    setMap(null);
  };

  const renderSolarIntensityOverlay = () => {
    if (!solarIntensityData) {
      return null;
    }

    return (
      <OverlayView position={teste} mapPaneName={OverlayView.OVERLAY_LAYER}>
        <SolarIntensityOverlay
          solarPotential={solarIntensityData.solarPotential}
        />
      </OverlayView>
    );
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={teste}
      zoom={8}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        mapTypeId: "satellite",
      }}
    >
      <Marker position={teste} />
      {renderSolarIntensityOverlay()}
    </GoogleMap>
  ) : (
    <></>
  );
}
