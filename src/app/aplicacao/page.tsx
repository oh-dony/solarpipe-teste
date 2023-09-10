"use client";

import { Address } from "@/dtos/address";
import { useState, useEffect } from "react";

export default function App() {
  const [data, setData] = useState([] as Address[]);

  const handleClick = (index: number) => {
    const updatedData = [...data];
    updatedData.forEach((address, i) => {
      address.active = i === index;
    });
    setData(updatedData);
  };

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

  useEffect(() => {
    alert("teste");
    const fetchSolarData = async () => {
      if (data.length > 0) {
        const { latitude, longitude } = data[0]; // Use as coordenadas do primeiro endereço (ajuste conforme necessário)

        try {
          const apiSolarGoogle = await fetch(
            `https://solar.googleapis.com/v1/buildingInsights:findClosest?key=AIzaSyCSgovlnEMggBrOEOShYxJ8a9ruoBlSnEU`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                location: {
                  latitude,
                  longitude,
                },
                requiredQuality: "HIGH",
              }),
            }
          );

          if (!apiSolarGoogle.ok) {
            throw new Error("Erro ao buscar dados solares.");
          }

          const googleRes = await apiSolarGoogle.json();
          console.log("Dados solares:", googleRes);
        } catch (error) {
          console.error("Ocorreu um erro ao buscar dados solares:", error);
        }
      }
    };

    fetchSolarData();
  }, [data]);

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
        <div className="addresses-content">
          {data.map((address: Address, index: number) => (
            <div
              className={`addresses-card ${address.active ? "active" : ""}`}
              key={index}
              onClick={() => handleClick(index)}
            >
              <div className="addresses-card-header">
                <h2>{address.description}</h2>
              </div>

              <div className="addresses-card-body">
                <p>
                  <b>Cidade:</b> {address.city}
                </p>
                <p>
                  <b>Estado:</b> {address.state}
                </p>
                <p>
                  <b>CEP:</b> {address.zipcode}
                </p>
                <p>
                  <b>Rua:</b> {address.streetName}
                </p>
                <p>
                  <b>Número:</b> {address.streetNumber}
                </p>
                <p>
                  <b>Bairro:</b> {address.neighbourhood}
                </p>
              </div>

              {/* {address.latitude}
              {address.longitude} */}
            </div>
          ))}
        </div>

        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </section>
  );
}
