import { OverlayView } from "@react-google-maps/api";
import { scaleSequential } from "d3-scale";
import { interpolateViridis } from "d3-scale-chromatic";

export const calculateColorFromIntensity = (intensity) => {
  const colorScale = scaleSequential(interpolateViridis).domain([0, 1000]);

  return colorScale(intensity);
};

export const SolarIntensityOverlay = ({ solarPotential }) => {
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

export const renderSolarIntensityOverlay = (solarIntensityData, center) => {
  if (!solarIntensityData) {
    return null;
  }

  return (
    <OverlayView position={center} mapPaneName={OverlayView.OVERLAY_LAYER}>
      <SolarIntensityOverlay
        solarPotential={solarIntensityData.solarPotential}
      />
    </OverlayView>
  );
};
