// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, CssBaseline, Box } from '@mui/material';
import Navbar from './components/Navbar';
import UserForm from './components/UserForm';
import PackageForm from './components/PackageForm';
import PickupRequestForm from './components/PickupRequestForm';
import UserTable from './components/UserTable';
import PackageTable from './components/PackageTable';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Container>
        <Box my={4}>
          <Routes>
            <Route path="/register-user" element={<UserForm />} />
            <Route path="/register-package" element={<PackageForm />} />
            <Route path="/request-pickup" element={<PickupRequestForm />} />
            <Route path="/users" element={<UserTable />} />
            <Route path="/packages" element={<PackageTable />} />
            <Route path="/" element={
              <div>
                <h1>Welcome to On the Spot Courier Service</h1>
                <p>Your trusted courier service for fast and reliable deliveries.</p>
              </div>
            } />
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
