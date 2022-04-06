import { Button, Col, Row } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import CardAvgAge from "../../components/CardAvgAge";
import TableClients from "../../components/TableClients";
import ModalAddClient from "../../components/ModalAddClient";
import getClients from "../../services/getClients";
import getAverageAge from "../../services/getAverageAge";

const ClientsPage = () => {
  const [modal, setModal] = useState(false);
  const [clients, setClients] = useState([]);
  const [avgAge, setAvgAge] = useState(0);

  useEffect(() => {
    getListClients();
    getAvg();
  }, []);

  const getAvg = async () => {
    const result = await getAverageAge();
    setAvgAge(result);
  };

  const getListClients = async () => {
    let result = await getClients();
    setClients(result);
  };

  const openModal = () => {
    setModal(true);
  };

  return (
    <>
      <Row style={{ marginBottom: "16px" }}>
        <Button icon={<UserAddOutlined />} onClick={openModal}>
          Agregar Cliente
        </Button>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={16} xl={16}>
          <TableClients clients={clients} />
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8}>
          <CardAvgAge avgAge={avgAge} />
        </Col>
      </Row>
      <ModalAddClient
        modal={modal}
        setModal={setModal}
        setClients={setClients}
        setAvgAge={setAvgAge}
      />
    </>
  );
};

export default ClientsPage;
