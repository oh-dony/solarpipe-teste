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
    lat: -22.2265335,
    lng: -54.7937397,
  });

  useEffect(() => {
    const fetchData = async () => {
      const addressesResponse = await GetAddresses();

      if (addressesResponse) {
        setAddresses(addressesResponse);
        setMarker(addresses[0].description);
        setCenter({
          lat: parseFloat(addresses[0].latitude),
          lng: parseFloat(addresses[0].longitude),
        });
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <h2>Mapa solar</h2>
          <p>
            Utilize nosso aplicativo e descubra a intensidade solar da sua casa,
            obtendo insights valiosos para aproveitar ao máximo a energia solar
            em sua residência!
          </p>
        </div>

        <div className="app-content">
          <div className="addresses-content">
            <AddressesCard data={addresses} onEventEmit={changeAddressOnMap} />
          </div>

          <div className="google-map-content">
            <GoogleMapComponent coordinates={center} marker={marker} />
          </div>
        </div>
      </div>
    </section>
  );
}
