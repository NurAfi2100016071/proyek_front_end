import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Periksa apakah semua data terisi
    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    // Periksa apakah password dan konfirmasi password cocok
    if (password !== confirmPassword) {
      alert('Password dan Konfirmasi Password tidak cocok');
      return;
    }

    try {
      // Kirim data registrasi ke backend
      const response = await axios.post('https://tiny-gray-newt-tie.cyclic.app/register', {
        name,
        email,
        password,
        confirmPassword,
      });
      
      navigate('/login');
      console.log(response.data); // Outputkan pesan dari backend

      // Reset form setelah berhasil registrasi
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      alert('Registrasi berhasil');
    } catch (error) {
      console.log(error.response.data);
      alert('Akun email sudah terdaftar');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title className="text-center">Registrasi</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Masukkan nama" value={name} onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukkan email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Masukkan password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Konfirmasi Password</Form.Label>
              <Form.Control type="password" placeholder="Masukkan kembali password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </Form.Group>
            <Button className="mt-4" variant="primary" type="submit" style={{ width: '100%' }}>
              Daftar
            </Button>
            <div className="mt-3 text-center">
              <p>
                Sudah punya akun? <a href="/login">Login disini</a>
              </p>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RegisterForm;
