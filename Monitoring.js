import React from "react";
import Navbar from "../components/Navbar";

function Monitoring() {
  return (
    <div>
      <Navbar />

      <div className="home-container">
        <h1>Flight Monitoring</h1>

        <div className="cards-container">
          <div className="flight-card">
            <h3>AI202</h3>
            <p>Status: Delayed</p>
            <p>Updated: 10:45 AM</p>
          </div>

          <div className="flight-card">
            <h3>6E451</h3>
            <p>Status: On Time</p>
            <p>Updated: 11:10 AM</p>
          </div>

          <div className="flight-card">
            <h3>UK879</h3>
            <p>Status: Boarding</p>
            <p>Updated: 11:25 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monitoring;