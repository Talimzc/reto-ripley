import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import LineChart from "../../components/LineChart";
import PieChart from "../../components/PieChart";
import getAgeClients from "../../services/getAgeClients";

const HomePage = () => {
  const [dataPieChart, setDataPieChart] = useState(null);
  const [datalineChart, setDataLineChart] = useState(null);

  useEffect(() => {
    getAge();
  }, []);

  const getAge = async () => {
    let ages = await getAgeClients();
    let pieChartInput = [
      {
        type: "Menores de Edad",
        value: ages.min,
      },
      {
        type: "Mayores de Edad",
        value: ages.max,
      },
    ];
    setDataPieChart(pieChartInput);
    let lineChartInput = [
      { age: "Menor de Edad", qnt: ages.min },
      { age: "Mayor de Edad", qnt: ages.max },
    ];
    setDataLineChart(lineChartInput);
  };
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col xs={24} md={12} className="graficaCircular">
          {dataPieChart && <PieChart dataPieChart={dataPieChart} />}
        </Col>
        <Col xs={24} md={12}>
          {datalineChart && <LineChart datalineChart={datalineChart} />}
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
