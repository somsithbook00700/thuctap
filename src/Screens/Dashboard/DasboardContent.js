import React from "react";
import LineChart from "./LineChart";
import QualityChart from "./QualityChart";
import PigeChart from "./PigeChart";

export default function DasboardContent() {
  return (
    <div className="content">
      <form style={{ margin: "2rem", width: "100%" }}>
        <label htmlFor="todolist" className="form-label">
          To do list
        </label>
        <input
          type="text"
          name="todolist"
          id="todolist"
          className="form-input"
        />
        <br />
        <label htmlFor="task" className="form-label">
          Task
        </label>
        <input type="text" name="" id="" className="form-input" />
      </form>
      <hr />
      <div className="graph-panel">
        <label htmlFor="temperature-chart">
          <h2>Temperature Chart</h2>
        </label>
        <QualityChart />
        <label htmlFor="air-quality-chart">
          <h2>Air quality Chart</h2>
        </label>
        <PigeChart />
        <label htmlFor="pige-chart">
          <h2>Pige Chart</h2>
        </label>
        <LineChart />
      </div>
    </div>
  );
}
