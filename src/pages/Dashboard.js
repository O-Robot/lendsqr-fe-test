import React, { useState } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { BlankPage } from "./UserDetails";

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
      <BlankPage />
    </Layout>
  );
};

export default Dashboard;
