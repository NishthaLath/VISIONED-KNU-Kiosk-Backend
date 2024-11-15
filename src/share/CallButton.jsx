// src/components/CallButton.jsx
import React from "react";
import "./allshared.css"; // Import the CSS file for button styling

const CallButton = ({ onClick, label = "안내원 전화 연결" }) => {
    return (
        <button className="call-button" onClick={onClick}>
            {label}
        </button>
    );
};

export default CallButton;