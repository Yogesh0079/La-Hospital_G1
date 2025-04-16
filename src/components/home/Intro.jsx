import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Intro() {
  return (
      <div
        className="welcome-section"
        style={{
          flex: "1 1 400px",
          padding: "30px",
          maxWidth: "600px",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
        Welcome to La Hospital
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
          Your health is our priority. We provide world-class medical services
          with a team of experienced professionals. Our hospital is equipped
          with state-of-the-art facilities to ensure the best care for you and
          your loved ones.
        </p>
      </div>
  );
}
