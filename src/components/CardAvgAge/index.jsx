import { Card } from "antd";
import React from "react";

const CardAvgAge = ({ avgAge }) => {
  return (
    <Card title="Promedio de Edades">
      <h1>{avgAge}</h1>
    </Card>
  );
};

export default CardAvgAge;
