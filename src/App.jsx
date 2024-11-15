// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import Voice from './voice/Sub1/Sub1';
import { RouteOption } from "./RouteOption/RouteOption";
import Sub2Route from './route/Sub2/Route';
import Check from './check/Group8/Group8';
import Print from './print/Frame6/Frame6';
import Call from './call/Frame7/Frame7';
import ChooseApp from "./choose/choose.jsx";
import TaxiFindApp from "./taxi_find/App.jsx";
import TaxiFoundApp from "./taxi_found/App.jsx";
import TaxiPrintApp from "./taxi_print/App.jsx";
import './styles.css';
import './vars.css';

function App() {

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/choose" element={<ChooseApp />} />
          <Route path="/voice" element={<Voice />} />
          <Route path="/route_option" element={<RouteOption />} />
          <Route path="/route" element={<Sub2Route />} />
          <Route path="/check" element={<Check />} />
          <Route path="/print" element={<Print />} />
          <Route path="/call" element={<Call />} />
          <Route path="/taxi_find" element={<TaxiFindApp />} />
          <Route path="/taxi_found" element={<TaxiFoundApp />} />
          <Route path="/taxi_print" element={<TaxiPrintApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
