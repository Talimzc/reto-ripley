import { Table } from "antd";
import React from "react";

const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Apellido",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Fecha de Nacimiento",
    dataIndex: "dateOfBirth",
    key: "dateOfBirth",
  },
];

const TableClients = ({ clients }) => {
  return <Table columns={columns} dataSource={clients} />;
};

export default TableClients;
