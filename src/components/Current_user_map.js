import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const Current_user_map = (props) => {
  return (
    <div>
      <Map
        google={props.google}
        style={{ width: "35.7%", height: "55%" }}
        zoom={15}
        initialCenter={{
          lat: 6.047170,
          lng: 80.210091,
        }}
      >
        {/* Marker for the first point */}
        {/* <Marker position={{ lat: 6.053519, lng: 80.220978 }} /> */}

        {/* Marker for the second point */}
        <Marker position={{ lat: 6.034010, lng: 80.218852 }} />

        {/* Marker for the second point */}
        <Marker position={{ lat: 6.043047, lng: 80.197158 }} />

        {/* Marker for the second point */}
        <Marker position={{ lat: 6.049653, lng: 80.203943 }} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBRIOBv7RD1nfT3AkqPOtyJ0z7pHt68Ic0",
})(Current_user_map);
