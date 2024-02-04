import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Login from './Login';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Profile from './components/profile';
export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    console.log('Token:', token); // Log the token content

    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log('Decoded Token:', decoded);
        setUser(decoded);
      } catch (error) {
        console.error('Error decoding token:', error.message); // Log the specific error message
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);

  function k1() {
    var token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        return decoded;
      } catch (error) {
        console.error('Error decoding token in k1:', error.message);
        return null;
      }
    }
  }

  // Call the function
  const decodedTokenFromK1 = k1();
  console.log('Decoded Token from k1:', decodedTokenFromK1);

  return (
    <>
      <BrowserRouter>
        <Navbar check={user ? ` ${user.user}` : 'sign in'} />
        <Routes>
          <Route path="/" element={<Login verify={user} />} />
          {localStorage.getItem('token') ? (
            <Route
              path="/profile"
              element={<Profile user={user ? ` ${user.user}` : 'null'} email={user ? ` ${user.email}` : 'null'} />}
            />
          ) : 
            <Route path="/profile" element={<h1>please sign in<Link to={'/'}>Click here</Link></h1>} />
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}
