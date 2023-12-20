import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const MapContainer = (props) => {
  const mapStyles = {
    width: "500px",
    height: "400px",
  };

  const containerStyles = {
    position: "relative",
    width: "100%",
    height: "100%",

  };

  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      containerStyle={containerStyles}
      initialCenter={{ lat: 59.414142, lng: 5.26833 }}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAhaXyicQHuaaSGQMqhXrJKE1bxnYVliY0",
})(MapContainer)
