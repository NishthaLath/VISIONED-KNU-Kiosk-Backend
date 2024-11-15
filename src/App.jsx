import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles.css';
import './vars.css';

import App from "./App"; // Assuming App is the main component
import { Main } from "./Main/Main";
import ChooseApp from "./choose/Choose.jsx";
import VoiceApp from "./voice/App.jsx"; // Adjust path as necessary
import RouteApp from "./route/App.jsx";
import RouteOptionApp from "./route_option/App.jsx";
import CheckApp from "./check/App.jsx";
import CallApp from "./call/App.jsx";
import PrintApp from "./print/App.jsx";
import TaxiFindApp from "./taxi_find/App.jsx";
import TaxiFoundApp from "./taxi_found/App.jsx";
import TaxiPrintApp from "./taxi_print/App.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/choose" element={<ChooseApp />} />
                <Route path="/voice" element={<VoiceApp />} />
                <Route path="/route" element={<RouteApp />} />
                <Route path="/route_option" element={<RouteOptionApp />} />
                <Route path="/app" element={<App />} />
                <Route path="/check" element={<CheckApp />} />
                <Route path="/call" element={<CallApp />} />
                <Route path="/print" element={<PrintApp />} />
                <Route path="/taxi_find" element={<TaxiFindApp />} />
                <Route path="/taxi_found" element={<TaxiFoundApp />} />
                <Route path="/taxi_print" element={<TaxiPrintApp />} />
            </Routes>
        </Router>
    </StrictMode>
);
