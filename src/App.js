// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './components/MainScreen';
import VoiceInput from './components/VoiceInput';
import RouteDisplay from './components/RouteDisplay';
import HelpRequest from './components/HelpRequest';
import TextToSpeech from './components/TextToSpeech';
import Frame7 from './Main/Frame7';
import Sub1 from './voice/Sub1';
import Sub2 from './route/Sub2';
import Group8 from './check/Group8';
import Frame6 from './print/Frame6';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/voice" element={<VoiceInput />} />
        <Route path="/route" element={<RouteDisplay />} />
        <Route path="/help" element={<HelpRequest />} />
        <Route path="/print" element={<TextToSpeech />} />
        <Route path="/main" element={<Frame7 />} />
        <Route path="/voiceinput" element={<Sub1 />} />
        <Route path="/routedisplay" element={<Sub2 />} />
        <Route path="/check" element={<Group8 />} />
        <Route path="/printframe" element={<Frame6 />} />
      </Routes>
    </Router>
  );
}

export default App;
