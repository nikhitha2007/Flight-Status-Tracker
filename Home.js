import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />

      <div className="hero-section">
        <h1>Flight Status Tracker</h1>

        <p>
          Get real-time flight updates, delays, gate changes,
          and arrival information instantly.
        </p>

        <button className="track-btn">
          Track Flight
        </button>
      </div>

      <div className="cards-container">

        <div className="flight-card">
          <h3>AI202</h3>

          <p><strong>Status:</strong> Delayed</p>

          <p>Hyderabad → Delhi</p>

          <p>Departure: 10:30 AM</p>

          <p>Gate: A12</p>
        </div>

        <div className="flight-card">
          <h3>6E451</h3>

          <p><strong>Status:</strong> On Time</p>

          <p>Chennai → Mumbai</p>

          <p>Departure: 2:00 PM</p>

          <p>Gate: B7</p>
        </div>

        <div className="flight-card">
          <h3>UK879</h3>

          <p><strong>Status:</strong> Boarding</p>

          <p>Bangalore → Kolkata</p>

          <p>Departure: 6:45 PM</p>

          <p>Gate: C3</p>
        </div>

      </div>
    </div>
  );
}

export default Home;