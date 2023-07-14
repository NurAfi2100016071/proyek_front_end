import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Periksa apakah semua data terisi
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      // Kirim data login ke backend
      const response = await axios.post('http://localhost:9090/login', {
        email,
        password,
      });
      navigate('/home');
      console.log(response.data.token); // Outputkan pesan dari backend
      localStorage.setItem('token', response.data.token);

      // Reset form setelah berhasil login
      setEmail('');
      setPassword('');

      alert('Login berhasil');
    } catch (error) {
      console.log(error.response.data);
      alert('Email atau Password tidak cocok');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title className="text-center">Login</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Masukkan email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Masukkan password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button className="mt-4" variant="primary" type="submit" style={{ width: '100%' }}>
              Login
            </Button>
            <div className="mt-3 text-center">
              <p>
                Belum punya akun? <a href="/">Daftar disini</a>
              </p>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginForm;