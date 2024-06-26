import React, { useEffect, useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "@peacechen/google-maps-react";
import axios from "axios";

const MapContainer = (props) => {
  const [ridePaths, setRidePaths] = useState([]);

  // Function to fetch active ride paths from the backend
  const fetchActiveRidePaths = async () => {
    try {
      const response = await axios.get(
        "https://backend-host-9thd.onrender.com/api/v1/ride/activeRidePaths"
      );
      setRidePaths(response.data);
    } catch (error) {
      console.error("Error fetching active ride paths:", error);
    }
  };

  // Fetch ride paths on component mount
  useEffect(() => {
    fetchActiveRidePaths();
  }, []);

  // const cycleIcon = {
  //   url: "https://img.pngwing.com/pngs/582/77/png-transparent-bicycle-icons-pedaler-cyclist-cycling-cycling-sport-sports-equipment-thumbnail.png", // Replace with your icon URL
  //   scaledSize: new window.google.maps.Size(30, 30),
  //   origin: new window.google.maps.Point(0, 0),
  //   anchor: new window.google.maps.Point(15, 30)
  // };

  return (
    <div>
      <Map
        google={props.google}
        style={{ width: "80.7%", height: "630px" }}
        zoom={15}
        initialCenter={{
          lat: 6.034840,
          lng: 80.220073,
        }}
      >
       

       
        <Marker position={{ lat:  6.0367, lng: 80.217 }} />
        <Marker position={{ lat:  6.035, lng: 80.226 }} />
        <Marker position={{ lat:  6.0298, lng: 80.2174 }} />
        <Marker position={{ lat:  6.0362, lng: 80.2156 }} />

        
        {ridePaths.map((path, index) => (
          <Marker
            key={index}
            position={{ lat: path.latitude, lng: path.longitude }}
            title={`Ride ID: ${path.rideId}, Timestamp: ${path.timestamp}`}
            // icon={cycleIcon}
          />
        ))}
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBRIOBv7RD1nfT3AkqPOtyJ0z7pHt68Ic0",
})(MapContainer);
