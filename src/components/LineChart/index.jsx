import { Line } from "@ant-design/charts";
import { Card } from "antd";
import React from "react";

const LineChart = ({ datalineChart }) => {
  const configLine = {
    data: datalineChart,
    height: 410,
    xField: "age",
    yField: "qnt",
    color: "#01B075",
    point: {
      size: 5,
      shape: "diamond",
      color: "#01B075",
    },
    label: {
      style: {
        fill: "#aaa",
        fontSize: 16,
        stroke: "#01B075",
      },
    },
  };

  return (
    <Card>
      <Line {...configLine} style={{ padding: "20px" }} />
    </Card>
  );
};

export default LineChart;
