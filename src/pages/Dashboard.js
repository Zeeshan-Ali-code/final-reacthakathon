import React from 'react';
import { Button, Layout, Card, Row, Col } from 'antd';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const { Header, Content } = Layout;

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#001529', color: '#fff' }}>
        <h1 style={{ color: '#fff', margin: 0 }}>My Dashboard</h1>
        <Button onClick={handleLogout} type="primary">Logout</Button>
      </Header>
      <Content style={{ padding: '24px' }}>
        <h2>Welcome, {user?.name || 'Guest'}!</h2>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} lg={8}>
            <Card title="Card 1" bordered>
              Content for Card 1
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card title="Card 2" bordered>
              Content for Card 2
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8}>
            <Card title="Card 3" bordered>
              Content for Card 3
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Dashboard;
