// src/context/AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transcription, setTranscription] = useState('');
  const [routeData, setRouteData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ttsPlaying, setTtsPlaying] = useState(false); // New state for TTS playback
  const [dialogflowResponse, setDialogflowResponse] = useState(''); // New state for Dialogflow response

  return (
    <AppContext.Provider
      value={{
        transcription,
        setTranscription,
        routeData,
        setRouteData,
        loading,
        setLoading,
        ttsPlaying,
        setTtsPlaying,
        dialogflowResponse,
        setDialogflowResponse,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
