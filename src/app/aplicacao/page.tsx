"use client";

import { useState, useEffect } from "react";

// Dtos
import { Address } from "@/dtos/address";

// Components
import GoogleMapComponent from "../components/GoogleMapComponent";
import { AddressesCard } from "../components/AddressesCard";
import { GetAddresses } from "@/api/GetAddresses";

export default function App() {
  const [addresses, setAddresses] = useState([] as Address[]);
  const [marker, setMarker] = useState<string | null>(null);
  const [center, setCenter] = useState({
    lat: 37.445,
    lng: -122.139,
  });

  useEffect(() => {
    const fetchData = async () => {
      const addressesResponse = await GetAddresses();
      setAddresses(addressesResponse);
    };

    fetchData();
  }, []);

  const changeAddressOnMap = (address: Address) => {
    setMarker(address.description);
    setCenter({
      lat: parseFloat(address.latitude),
      lng: parseFloat(address.longitude),
    });
  };

  return (
    <section className="app">
      <div className="container content">
        <div className="section-header">
          <h2>Artigos</h2>
          <p>
            Fique por dentro das últimas novidades no mundo da energia solar e
            descubra como a energia do sol está transformando o nosso futuro
            sustentável.
          </p>
        </div>

        <div className="app-content">
          <div className="addresses-content">
            <AddressesCard data={addresses} onEventEmit={changeAddressOnMap} />
          </div>

          <GoogleMapComponent coordinates={center} marker={marker} />
        </div>
      </div>
    </section>
  );
}
