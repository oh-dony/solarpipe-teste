export async function GetBuildingInsights(center: any) {
  const url = process.env.NEXT_PUBLIC_GOOGLE_API_URL;
  const apiSecret = process.env.NEXT_PUBLIC_GOOGLE_SECRET_KEY;
  const params = `buildingInsights:findClosest?location.latitude=${center.lat}&location.longitude=${center.lng}&requiredQuality=HIGH&key=${apiSecret}`;

  if (url) {
    const response = await fetch(url + params, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar os endereços.");
    }

    const buildingInsights = await response.json();

    return buildingInsights;
  } else {
    throw new Error(
      "A variável de ambiente ADDRESSES_API_URL não está definida."
    );
  }
}
