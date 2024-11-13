import React from 'react';
import MainScreen from './components/MainScreen';
import VoiceInput from './components/VoiceInput';
import RouteDisplay from './components/RouteDisplay';
import HelpRequest from './components/HelpRequest';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Main Landing Screen */}
      <MainScreen />

      {/* Voice Input for Destination */}
      <VoiceInput />

      {/* Display Route Options */}
      <RouteDisplay />

      {/* Help Request Section */}
      <HelpRequest />
    </div>
  );
}

export default App;
