// src/components/PickupRequestForm.js
import React, { useState } from 'react';
import axios from 'axios';

const PickupRequestForm = () => {
  const [userId, setUserId] = useState('');
  const [packageId, setPackageId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://courier.sheikhstudios.live/pickup', { user_id: userId, package_id: packageId })
      .then(response => {
        console.log(response.data);
        alert("Pickup Request successfully added");
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>User ID:</label>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </div>
      <div>
        <label>Package ID:</label>
        <input type="text" value={packageId} onChange={(e) => setPackageId(e.target.value)} />
      </div>
      <button type="submit">Request Pickup</button>
    </form>
  );
};

export default PickupRequestForm;
