import React, { useState, useEffect, useRef } from "react"; // Import useRef and useEffect
import * as htmlToImage from "html-to-image";
import "../components/QrCodeGenerator.css";
import "../components/Current_user_view.css";
import QRCode from "react-qr-code";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Current_user_map from "./Current_user_map.js";

function Current_user_view({ handleQrWindowClose, selectedUser }) {
  const [url, setUrl] = useState(""); // Update to hold bike details

  const qrCodeRef = useRef(null);

  const [currentUserData, setcurrentUserData] = useState([]);

  const currentUserDatafun = async () => {
    try {
      const result = await axios.get(`http://localhost:8095/api/v1/user/inRide/${selectedUser.userId}`); // Use selected user's ID
      console.log("Result data:", result.data);
      setcurrentUserData(result.data);
    } catch (error) {
      console.error("Error loading users:", error);
    }
  };
  

  useEffect(() => {
    currentUserDatafun();
  }, [selectedUser]);

  return (
    <div className="qrcode__container">
      <div className="closeQrWindow">
        <FontAwesomeIcon onClick={handleQrWindowClose} icon={faClose} />
      </div>
      <h1 style={{ textAlign: "center" }}>Current User Details</h1>
      <div className="border_currentuser">
        <div className="column">
          {" "}
          <Current_user_map />
        </div>
        <div className="column">
        <ul>
            {currentUserData.map((User, index) => (
              <div>
              <li className="user-detail" key={index}>
                <div>User ID: {User.userId}</div>
              </li>
              <li className="user-detail">
              <div>First Name: {User.firstName}</div>
              </li>
              <li className="user-detail">
              <div>Last Name: {User.lastName}</div>
              </li>
              <li className="user-detail">
              <div>Email: {User.email}</div>
              </li>
              <li className="user-detail">
              <div>Mobile: {User.mobile}</div>
              </li>
              <li className="user-detail">
              <div>Registed Time: {User.registrationTime}</div>
              </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Current_user_view;