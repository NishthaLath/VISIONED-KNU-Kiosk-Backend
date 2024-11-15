import React from "react";
import "./BackButton.css"; // Import the CSS file for button styling

const BackButton = ({ onClick, label = "Back" }) => {
    return (
        <button className="back-button" onClick={onClick}>
            {label}
        </button>
    );
};

export default BackButton;