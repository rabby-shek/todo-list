import React from "react";
import Widget from "../components/global/Widget";
import { FaPeopleLine } from "react-icons/fa6";

const widgetsData = [
  {
    bgClass: "bg-light",
    icon: <FaPeopleLine />,
    value: "20",
    label: "Users",
    chartId: "chart1",
  },
  {
    bgClass: "bg-dark-light",
    icon: <FaPeopleLine />,
    value: "400",
    label: "Deals",
    chartId: "chart2",
  },
  {
    bgClass: "bg-grey",
    icon: <FaPeopleLine />,
    value: "350",
    label: "Campaign",
    chartId: "chart3",
  },
  {
    bgClass: "bg-light-blue",
    icon: <FaPeopleLine />,
    value: "$6060",
    label: "Worth",
    chartId: "chart4",
  },
];

const Dashboard = () => {
  return (
    <div className="row">
      {widgetsData.map((widget, index) => (
        <Widget
          key={index}
          bgClass={widget.bgClass}
          iconClass=""
          icon={widget.icon}
          value={widget.value}
          label={widget.label}
          chartId={widget.chartId}
        />
      ))}
    </div>
  );
};

export default Dashboard;
