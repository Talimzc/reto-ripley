import React, { useState } from "react";
import { Menu } from "antd";
import { DashboardOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Header = () => {
  const [current, setCurrent] = useState("dashboard");

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="clients" icon={<UserOutlined />}>
          <Link to="/clients">Clientes</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Header;
