import { Address } from "@/dtos/address";

export async function GetAddresses(): Promise<Address[]> {
  const url = process.env.NEXT_PUBLIC_ADDRESSES_API_URL;

  if (url) {
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar os endereços.");
    }

    const addresses = await response.json();
    const data = mapAddresses(addresses);

    return data;
  } else {
    throw new Error(
      "A variável de ambiente ADDRESSES_API_URL não está definida."
    );
  }
}

function mapAddresses(addresses: any) {
  const data = addresses.map((address: Address) => {
    return {
      active: false,
      zipcode: address.zipcode,
      state: address.state,
      city: address.city,
      streetName: address.streetName,
      description: address.description,
      neighbourhood: address.neighbourhood,
      streetNumber: address.streetNumber,
      latitude: address.latitude,
      longitude: address.longitude,
    };
  });

  data[0].active = true;

  return data;
}
