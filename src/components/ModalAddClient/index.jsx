import { Button, DatePicker, Form, Input, Modal, message } from "antd";
import React from "react";
import createClient from "../../services/createClient";
import getAverageAge from "../../services/getAverageAge";
import getClients from "../../services/getClients";

const ModalAddClient = ({ modal, setModal, setClients, setAvgAge }) => {
  const [form] = Form.useForm();

  const closeModal = () => {
    setModal(false);
  };

  const submitForm = async (values) => {
    let input = { ...values, dateOfBirth: values?.dateOfBirth?._d };
    let client = await createClient(input);
    if (client) {
      message.success("Cliente creado satisfactoriamente");
      let resultClients = await getClients();
      setClients(resultClients);
      let resultAvg = await getAverageAge();
      setAvgAge(resultAvg);
      closeModal();
      form.resetFields();
    }
  };

  return (
    <Modal
      title="Agregar Cliente"
      visible={modal}
      onCancel={closeModal}
      footer={[
        <Button onClick={closeModal}>Cancelar</Button>,
        <Button form="form_client" key="submit" htmlType="submit">
          Guardar
        </Button>,
      ]}
    >
      <Form id="form_client" onFinish={(values) => submitForm(values)}>
        <Form.Item
          name="firstName"
          label="Nombre"
          rules={[
            { required: true, message: "Nombre es requerido" },
            { min: 3, message: "Nombre tiene q tener mas de 2 letras" },
          ]}
          hasFeedback
        >
          <Input placeholder="Ingresa tu nombre" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Apellido"
          rules={[
            { required: true, message: "Apellido es requerido" },
            { min: 3, message: "Apellido tiene q tener mas de 2 letras" },
          ]}
          hasFeedback
        >
          <Input placeholder="Ingresa tu apellido" />
        </Form.Item>
        <Form.Item
          name="dateOfBirth"
          label="Fecha de Nacimiento"
          rules={[
            {
              required: true,
              message: "Fecha de Nacimiento es requerido",
            },
          ]}
        >
          <DatePicker
            placeholder="Ingresa Fecha de Nacimiento"
            style={{ width: "100%" }}
            picker="date"
            hasFeedback
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalAddClient;
