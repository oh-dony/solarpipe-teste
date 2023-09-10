"use client";

import { useState, useEffect } from "react";

// Dtos
import { Address } from "@/dtos/address";

// Components
import GoogleMapComponent from "../components/GoogleMapComponent";
import { AddressesCard } from "../components/AddressesCard";

export default function App() {
  const [data, setData] = useState([] as Address[]);
  const [marker, setMarker] = useState<string | null>("Label");
  const [center, setCenter] = useState({
    lat: 37.445,
    lng: -122.139,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://challenge.solarpipe.com.br/addresses",
          {
            next: {
              revalidate: 30,
            },
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar os endereços.");
        }

        const addresses = await response.json();
        setData(addresses);
      } catch (error) {
        console.error("Ocorreu um erro ao buscar os endereços:", error);
      }
    };

    fetchData();
  }, []);

  const addressEmit = (data: any) => {
    setMarker(data.description);
    setCenter({
      lat: parseFloat(data.latitude),
      lng: parseFloat(data.longitude),
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
            <AddressesCard data={data} onEventEmit={addressEmit} />
          </div>

          <GoogleMapComponent center={center} marker={marker} />
        </div>
      </div>
    </section>
  );
}
