import React from "react";
import Navbar from "../components/Navbar";

function Tracking() {
  return (
    <div>
      <Navbar />

      <div className="home-container">
        <h1>Flight Tracking</h1>

        <div className="flight-card">
          <h3>AI202 Live Tracking</h3>

          <p>Origin: Hyderabad</p>
          <p>Current Location: Nagpur</p>
          <p>Destination: Delhi</p>

          <div className="route-bar">
            <div className="route-progress"></div>
          </div>

          <p>Flight Progress: 65%</p>
        </div>
      </div>
    </div>
  );
}

export default Tracking;