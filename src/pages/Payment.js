import React, { useState } from "react";
import "./Payment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import revenueData from "../data/revenueData.json";

function Payment() {
  const [search, setSearch] = useState("");
  const [payment, setPayment] = useState([]);

  return (
    <div>
      <div className="Dashboard">
        <div className="dashboardRow">
          <span>Dashboard </span>
          <span>{">"}</span>
          <span> Payment </span>
        </div>
      </div>
      <div
        className="paymentbox"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div
          className="paymentbox1"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div></div>
          <div></div>
          <Line
            data={{
              labels: revenueData.map((data) => data.label),
              datasets: [
                {
                  label: "Revenue",
                  data: revenueData.map((data) => data.revenue),
                  backgroundColor: "#064FF0",
                  borderColor: "#064FF0",
                },
                {
                  label: "Cost",
                  data: revenueData.map((data) => data.cost),
                  backgroundColor: "#FF3030",
                  borderColor: "#FF3030",
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
        <div className="paymentbox2">
          <div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className="current_User">Payment</div>
              <div
                className="bike-Search_User"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{ marginRight: "5px" }}
                />
                <input
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                  style={{ border: "none", outline: "none", width: "120px" }}
                />
              </div>
            </div>
            <div className="payment_table table-container">
              <table className="bike-table">
                <thead style={{ width: "15%" }}>
                  <tr>
                    <th scope="col">Bike ID</th>
                    <th scope="col">User ID</th>
                    <th scope="col" style={{ width: "21%" }}>
                      Mobile
                    </th>
                    <th scope="col" style={{ width: "20%" }}>
                      Total payment
                    </th>
                    <th scope="col" style={{ width: "21%" }}>
                      Start date
                    </th>
                    <th scope="col">Duration</th>
                    <th scope="col" style={{ width: "15%" }}>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <td>1</td>
                    <td>12</td>
                    <td>077 4589564</td>
                    <td>500</td>
                    <td>2023-12-12</td>
                    <td>30 mins</td>
                    <td>
                      <div className="dropdown" style={{ textAlign: "center" }}>
                        <button
                          className="dropbtn"
                          style={{ alignItems: "center" }}
                        >
                          Action <span className="arrow">&#9658;</span>
                        </button>
                        <div className="dropdown-content">
                          <button
                            className="action-button"
                            // onClick={() => handleAction("Edit")}
                          >
                            Edit
                          </button>
                          <button
                            className="action-button"
                            // onClick={() => handleAction("View")}
                          >
                            View
                          </button>
                          <button
                            className="action-button"
                            // onClick={() => handleAction("View location")}
                          >
                            View location
                          </button>
                          <button
                            className="action-button"
                            // onClick={() => handleAction("Delete")}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>1</td>

                    <td>12</td>
                    <td>077 4589564</td>
                    <td>500</td>
                    <td>2023-12-12</td>

                    <td>30 mins</td>

                    <td>
                      <div className="dropdown" style={{ textAlign: "center" }}>
                        <button
                          className="dropbtn"
                          style={{ alignItems: "center" }}
                        >
                          Action <span className="arrow">&#9658;</span>
                        </button>
                        <div className="dropdown-content">
                          <button
                            className="action-button"
                            // onClick={() => handleAction("Edit")}
                          >
                            Edit
                          </button>
                          <button
                            className="action-button"
                            // onClick={() => handleAction("View")}
                          >
                            View
                          </button>
                          <button
                            className="action-button"
                            // onClick={() => handleAction("View location")}
                          >
                            View location
                          </button>
                          <button
                            className="action-button"
                            // onClick={() => handleAction("Delete")}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
