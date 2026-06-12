import React from "react";
import Navbar from "../components/Navbar";

function Admin() {
  return (
    <div>
      <Navbar />

      <div className="home-container">
        <h1>Admin Dashboard</h1>

        <div className="cards-container">

          <div className="flight-card">
            <h3>Total Flights</h3>
            <h1>120</h1>
          </div>

          <div className="flight-card">
            <h3>Delayed Flights</h3>
            <h1>8</h1>
          </div>

          <div className="flight-card">
            <h3>Notifications Sent</h3>
            <h1>56</h1>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Admin;