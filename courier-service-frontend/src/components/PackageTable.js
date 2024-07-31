// src/components/PackageTable.js
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const PackageTable = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    axios.get('https://courier.sheikhstudios.live/packages')
      .then(response => {
        setPackages(response.data);
      })
      .catch(error => {
        console.error('Error fetching package data:', error);
      });
  }, []);

  const columns = [
    { field: 'package_id', headerName: 'ID', width: 90 },
    { field: 'dimensions', headerName: 'Dimensions', width: 150 },
    { field: 'weight', headerName: 'Weight', width: 120 },
    { field: 'pickup_address', headerName: 'Pickup Address', width: 200 },
    { field: 'delivery_address', headerName: 'Delivery Address', width: 200 },
    { field: 'status', headerName: 'Status', width: 150 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Registered Packages</h2>
      <DataGrid rows={packages} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default PackageTable;
