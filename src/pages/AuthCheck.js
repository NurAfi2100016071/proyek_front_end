import React from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCheck = ({ children }) => {
  const navigate = useNavigate();

  // Cek status login saat komponen ini dirender
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (!isLoggedIn) {
    // Jika pengguna belum login, redirect ke halaman login
    navigate('/login');
    return null;
  }

  // Jika pengguna sudah login, tampilkan komponen anak
  return children;
};

export default AuthCheck;
