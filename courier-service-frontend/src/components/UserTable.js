// src/components/UserTable.js
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://courier.sheikhstudios.live/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const columns = [
    { field: 'user_id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'address', headerName: 'Address', width: 200 },
    { field: 'contact_info', headerName: 'Contact Info', width: 200 },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <h2>Registered Users</h2>
      <DataGrid rows={users} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
};

export default UserTable;
