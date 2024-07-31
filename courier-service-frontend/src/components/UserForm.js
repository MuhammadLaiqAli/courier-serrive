// src/components/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contactInfo, setContactInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://courier.sheikhstudios.live/users', { name, address, contact_info: contactInfo })
      .then(response => {
        console.log(response.data);
        alert("User successfully added");
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <label>Contact Info:</label>
        <input type="text" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} />
      </div>
      <button type="submit">Register User</button>
    </form>
  );
};

export default UserForm;
