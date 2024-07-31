// src/components/PackageForm.js
import React, { useState } from 'react';
import axios from 'axios';

const PackageForm = () => {
  const [dimensions, setDimensions] = useState('');
  const [weight, setWeight] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://courier.sheikhstudios.live/packages', {
      dimensions, weight, pickup_address: pickupAddress, delivery_address: deliveryAddress
    })
      .then(response => {
        console.log(response.data);
        alert("Package successfully added");
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Dimensions:</label>
        <input type="text" value={dimensions} onChange={(e) => setDimensions(e.target.value)} />
      </div>
      <div>
        <label>Weight:</label>
        <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Pickup Address:</label>
        <input type="text" value={pickupAddress} onChange={(e) => setPickupAddress(e.target.value)} />
      </div>
      <div>
        <label>Delivery Address:</label>
        <input type="text" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} />
      </div>
      <button type="submit">Register Package</button>
    </form>
  );
};

export default PackageForm;
