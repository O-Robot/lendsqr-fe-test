import React, { useState } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";

const Dashboard = () => {
  const [isOpen, setisOpen] = useState(false);
  const Click = () => {
    setisOpen(!isOpen);
  };
  return (
    <Layout>
      <p className="page-title">Dashboard</p>
      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </Layout>
  );
};

export default Dashboard;
