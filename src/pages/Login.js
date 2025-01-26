import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login: loginUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await login({ email, password });
      loginUser(response.data.user);
      navigate('/dashboard');
    } catch (error) {
      notification.error({
        message: 'Login Failed',
        description: 'Invalid credentials.',
      });
    }
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item label="Email" name="email">
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>
      <Button type="primary" htmlType="submit">Login</Button>
    </Form>
  );
};

export default Login;
    