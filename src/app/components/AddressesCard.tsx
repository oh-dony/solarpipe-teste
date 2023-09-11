import { useState, useEffect } from "react";

// Dtos
import { Address } from "@/dtos/address";

interface AddressesCardProps {
  data: Address[];
  onEventEmit: (address: Address) => void;
}

export function AddressesCard({ data, onEventEmit }: AddressesCardProps) {
  const [addresses, setAddresses] = useState([] as Address[]);

  useEffect(() => {
    setAddresses(data);
  }, [data]);

  const handleAddressClick = (index: number) => {
    const updatedAddresses = addresses.map((addr, i) => {
      const isActive = i === index;

      if (isActive) {
        const addressEmit = {
          description: addr.description,
          latitude: addr.latitude,
          longitude: addr.longitude,
        };

        onEventEmit(addressEmit);
      }

      return { ...addr, active: isActive };
    });

    setAddresses(updatedAddresses);
  };

  const formatAddress = (addr: Address) => {
    const addressParts = [
      addr.streetName,
      addr.neighbourhood,
      addr.streetNumber,
      addr.city,
      addr.state,
      addr.zipcode,
    ];

    return addressParts.join(", ");
  };

  return (
    <>
      {addresses.map((addr, index) => (
        <div
          className={`addresses-card ${addr.active ? "active" : ""}`}
          key={index}
          onClick={() => handleAddressClick(index)}
        >
          <div className="addresses-card-header">
            <h2>{addr.description}</h2>
          </div>

          <div className="addresses-card-body">{formatAddress(addr)}</div>
        </div>
      ))}
    </>
  );
}
