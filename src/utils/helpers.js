// src/utils/helpers.js
export const capitalizeText = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  
  export const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}m ${seconds}s`;
  };
  