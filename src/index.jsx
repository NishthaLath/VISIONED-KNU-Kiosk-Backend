import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles.css';
import './vars.css';

import App from "./App"; // Assuming App is the main component
import { Main } from "./Main/Main"; // Adjust path as necessary
import VoiceApp from "./voice/App.jsx"; // Adjust path as necessary
import RouteApp from "./route/App.jsx";
import CheckApp from "./check/App.jsx";
import CallApp from "./call/App.jsx";
import PrintApp from "./print/App.jsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/voice" element={<VoiceApp />} />
                <Route path="/route" element={<RouteApp />} />
                <Route path="/app" element={<App />} />
                <Route path="/check" element={<CheckApp />} />
                <Route path="/call" element={<CallApp />} />
                <Route path="/print" element={<PrintApp />} />
            </Routes>
        </Router>
    </StrictMode>
);
