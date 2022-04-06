import { Pie } from "@ant-design/charts";
import { Card } from "antd";
import React from "react";

const PieChart = ({ dataPieChart }) => {
  const configPie = {
    appendPadding: 10,
    data: dataPieChart,
    angleField: "value",
    colorField: "type",
    height: 450,
    radius: 0.8,
    label: {
      type: "inner",
      offset: "-0.5",
      content: "{name} {percentage}",
      style: {
        fill: "#000",
        fontSize: 14,
        textAlign: "center",
      },
    },
  };

  return (
    <Card>
      <Pie {...configPie} />
    </Card>
  );
};

export default PieChart;
