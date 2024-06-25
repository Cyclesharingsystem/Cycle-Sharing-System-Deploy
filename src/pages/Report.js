import React from "react";
import "./Report.css";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import revenueData from "../data/revenueDatareport.json";

function Report1() {
  return (
    <div style={{ width: "100%" }} className="column">
      <div className="Dashboard">
        <div className="dashboardRow">
          <span>Dashboard </span>
          <span>{">"}</span>
          <span> Reports </span>
        </div>
      </div>

      <div>
        <div style={{ marginTop: "20px" }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              className="StaionDetailsBoxuser"
              style={{ marginLeft: "50px" }}
            >
              <div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p className="text">Total income</p>
                  <p
                    className="text"
                    style={{ marginLeft: "100px", fontSize: "14px" }}
                  >
                    13 Today
                  </p>
                </div>

                <p className="numberuser1" style={{ marginTop: "21px" }}>
                  25 000
                </p>
              </div>
            </div>
            <div
              className="StaionDetailsBoxuser"
              style={{ marginLeft: "40px" }}
            >
              <div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p className="text">Total monthly income</p>
                  <p
                    className="text"
                    style={{ marginLeft: "100px", fontSize: "14px" }}
                  >
                    December
                  </p>
                </div>

                <p
                  className="numberuser1"
                  style={{ marginTop: "-22px", marginLeft: "100px" }}
                >
                  250 000
                </p>
              </div>
            </div>
            <div
              className="StaionDetailsBoxuser"
              style={{ marginLeft: "50px" }}
            >
              <div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p className="text">Maintenance fees</p>
                  <p
                    className="text"
                    style={{ marginLeft: "100px", fontSize: "14px" }}
                  >
                    13 Today
                  </p>
                </div>

                <p className="numberuser1">21 000</p>
              </div>
            </div>
            <div
              className="StaionDetailsBoxuser"
              style={{ marginLeft: "50px" }}
            >
              <div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p className="text">Total Balance</p>
                  <p
                    className="text"
                    style={{ marginLeft: "100px", fontSize: "14px" }}
                  >
                    13 Today
                  </p>
                </div>

                <p className="numberuser1">175 000</p>
              </div>
            </div>
          </div>
          <div className="reportbackground"
            style={{ display: "flex", flexDirection: "row", marginTop: "50px" }}
          >
            <div
              className="reportStaionDetailsBoxuser"
              style={{ marginLeft: "50px" }}
            >
              <div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p className="text" style={{ marginRight: "10px" }}>
                    Station A:
                  </p>
                  <p className="text" style={{ fontSize: "14px", marginLeft:"60px" }}>
                    13 Today
                  </p>
                </div>

                <p className="numberuser1" style={{ marginTop: "0px" }}>
                  25 000
                </p>
              </div>
              <div style={{ marginTop: "-150px" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p className="text">Station B:</p>
                </div>

                <p className="numberuser1" style={{ marginTop: "0px" }}>
                  32 000
                </p>
              </div>
              <div style={{ marginTop: "-150px" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p className="text">Station C:</p>
                </div>

                <p className="numberuser1" style={{ marginTop: "0px" }}>
                  32 000
                </p>
              </div>
              <div style={{ marginTop: "-150px" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p className="text">Station D:</p>
                </div>

                <p className="numberuser1" style={{ marginTop: "0px" }}>
                  32 000
                </p>
              </div>
            </div>
            <div style={{ width: "90%", height: "450px", marginLeft: "70px" }}>
              <Line
                data={{
                  labels: revenueData.map((data) => data.label),
                  datasets: [
                    {
                      label: "Revenue",
                      data: revenueData.map((data) => data.revenue),
                      backgroundColor: "#63DF08",
                      borderColor: "#63DF08",
                    },
                    {
                      label: "Cost",
                      data: revenueData.map((data) => data.cost),
                      backgroundColor: "#9B08DF",
                      borderColor: "#9B08DF",
                    },
                  ],
                }}
                options={{
                  scales: {
                    x: {
                      type: "category",
                      labels: revenueData.map((data) => data.label),
                    },
                    y: {
                      beginAtZero: true,
                    },
                  },
                  plugins: {
                    title: { display: true, text: "Monthly Revenue & Cost" },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report1;
