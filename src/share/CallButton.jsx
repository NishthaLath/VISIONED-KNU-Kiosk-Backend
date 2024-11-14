// src/components/CallButton.jsx
import React from "react";
import "./CallButton.css"; // Import the CSS file for button styling

const CallButton = ({ onClick, label = "Call" }) => {
    return (
        <button className="call-button" onClick={onClick}>
            {label}
        </button>
    );
};

export default CallButton;