import { useState, useEffect } from "react";

// Dtos
import { Address } from "@/dtos/address";

export function AddressesCard(props: any) {
  const [address, setData] = useState([] as Address[]);

  useEffect(() => {
    setData(props.data);
  }, [props]);

  const handleClick = (index: number) => {
    const updatedData = [...address];
    updatedData.forEach((address, i) => {
      address.active = i === index;

      if (address.active) {
        const addressEmit = {
          description: address.description,
          latitude: address.latitude,
          longitude: address.longitude,
        };

        props.onEventEmit(addressEmit);
      }
    });

    setData(updatedData);
  };

  function addressBody(address: any) {
    const addressBody = [
      address.streetName,
      address.neighbourhood,
      address.streetNumber,
      address.city,
      address.state,
      address.zipcode,
    ];

    return addressBody.join(", ");
  }

  return (
    <>
      {address.map((address: Address, index: number) => (
        <div
          className={`addresses-card ${address.active ? "active" : ""}`}
          key={index}
          onClick={() => handleClick(index)}
        >
          <div className="addresses-card-header">
            <h2>{address.description}</h2>
          </div>

          <div className="addresses-card-body">{addressBody(address)}</div>
        </div>
      ))}
    </>
  );
}
