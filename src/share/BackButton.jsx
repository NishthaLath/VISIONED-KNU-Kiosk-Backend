import React from "react";
import "./allshared.css";

const BackButton = ({ onClick, label = "뒤로가기" }) => {
    return (
        <button className="back-button" onClick={onClick}>
            {label}
        </button>
    );
};

export default BackButton;