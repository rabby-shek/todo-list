import React from "react";
import Widget from "../components/global/Widget";

const Dashboard = () => {
  return (
    <div class="row">
      <Widget
        bgClass="light"
        iconClass=""
        icon="fa-user"
        value="2020"
        label="Contact"
        chartId="chart1"
      />
      <Widget
        iconClass=""
        icon="fa-handshake-o"
        value="400"
        label="Deals"
        chartId="chart2"
      />
      <Widget
        bgClass="success box-shadow"
        iconClass=""
        icon="fa-bullhorn"
        value="350"
        label="Campaign"
        chartId="chart3"
      />
      <Widget
        bgClass="white box-shadow"
        iconClass=""
        icon="fa-dollar"
        value="$6060"
        label="Worth"
        chartId="chart4"
      />
    </div>
  );
};

export default Dashboard;
