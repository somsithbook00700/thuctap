import React from "react";
import Nav from "./Nav";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import DashboardContent from "./DasboardContent";
export default function Dashboard() {
  return (
    <div>
      <Nav />
      <div className="main">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
}
