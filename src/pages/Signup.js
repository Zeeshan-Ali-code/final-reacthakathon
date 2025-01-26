import React, { useState } from 'react';
import { Form, Input, Button, notification } from 'antd';
import { signup } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      await signup({ name, email, password });
      notification.success({ message: 'Signup Successful' });
      navigate('/login');
    } catch (error) {
      notification.error({ message: 'Signup Failed' });
    }
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item label="Name" name="name">
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Item>
      <Form.Item label="Email" name="email">
        <Input value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>
      <Button type="primary" htmlType="submit">Signup</Button>
    </Form>
  );
};

export default Signup;
