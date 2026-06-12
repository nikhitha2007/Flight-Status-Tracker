import React from "react";
import Navbar from "../components/Navbar";

function Notifications() {
  return (
    <div>
      <Navbar />

      <div className="home-container">
        <h1>Notifications</h1>

        <div className="cards-container">
          <div className="flight-card">
            <h3>🔔 Flight Alert</h3>
            <p>AI202 delayed by 20 minutes.</p>
          </div>

          <div className="flight-card">
            <h3>📢 Gate Update</h3>
            <p>Gate changed from A10 to A12.</p>
          </div>

          <div className="flight-card">
            <h3>✈ Boarding Notice</h3>
            <p>Boarding starts at 10:15 AM.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;