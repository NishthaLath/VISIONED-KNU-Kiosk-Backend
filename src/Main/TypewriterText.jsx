import React, { useState, useEffect } from "react";
import "./TypewriterText.css";

const TypewriterText = ({ text, speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + text[index]);
            index++;
            if (index === text.length) {
                clearInterval(intervalId);
            }
        }, speed);

        return () => clearInterval(intervalId); // Clean up interval on unmount
    }, [text, speed]);

    return <div className="typewriter-text">{displayedText}</div>;
};

export default TypewriterText;