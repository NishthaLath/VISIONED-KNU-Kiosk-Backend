// src/context/AppContext.js
import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transcription, setTranscription] = useState('');
  const [routeData, setRouteData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider value={{ transcription, setTranscription, routeData, setRouteData, loading, setLoading }}>
      {children}
    </AppContext.Provider>
  );
};
