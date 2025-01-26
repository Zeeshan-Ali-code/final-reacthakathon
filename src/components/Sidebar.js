import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider width={250} className="sidebar" breakpoint="lg" collapsedWidth="0">
      <Menu mode="inline" theme="dark" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<LogoutOutlined />}>
          <Link to="/login">Logout</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
