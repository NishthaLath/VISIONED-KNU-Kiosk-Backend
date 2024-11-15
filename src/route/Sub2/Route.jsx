/* eslint-disable no-unused-vars */
/* src/route/Route.jsx */
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from "@react-google-maps/api";
import axios from 'axios';
import "./Route.css";
import { playTextToSpeech } from "../../services/ttsService";
import CallButton from "../../share/CallButton.jsx";
import BackButton from "../../share/BackButton.jsx";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 35.8886, // Latitude for 경북대학교정문앞
  lng: 128.6105, // Longitude for 경북대학교정문앞
};

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const Route = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [destination, setDestination] = useState("");

  useEffect(() => {
    if (location.state && location.state.destination) {
      setDestination(location.state.destination);
      fetchRoutes(center, location.state.destination);
    }
  }, [location.state]);

  const fetchRoutes = async (origin, destination) => {
    try {
      const response = await axios.post('http://localhost:3001/get-routes', {
        origin,
        destination,
      });
      setRoutes(response.data.routes);
    } catch (error) {
      console.error('Error fetching routes:', error);
    }
  };

  const handleRouteClick = (routeIndex) => {
    setSelectedRoute(routes[routeIndex]);
    playTextToSpeech('경로를 선택하였습니다.');
  };

  const handleGoBack = () => {
    playTextToSpeech('이전 페이지로 돌아가겠습니다.');
    navigate(-1);
  };

  const handleNavigateToCall = () => {
    playTextToSpeech('담당 정류장 안내원과 전화연결 중입니다. 잠시만 기다려주세요.');
    navigate("/call");
  };

  const handleNavigateToCheck = () => {
    navigate("/check");
  };

  return (
    <div className="sub-2">
      <div className="rectangle-7" onClick={handleNavigateToCheck} style={{ cursor: "pointer" }}></div>
      <div className="rectangle-8" onClick={handleNavigateToCheck} style={{ cursor: "pointer" }}></div>
      <img className="image-removebg-preview-19-2" src="image-removebg-preview-19-20.png" alt="Microphone" />
      <div className="rectangle-5"></div>
      <div className="depth-4-frame-5">
        <div className="div">
          <br />현위치(경북대 정문){" "}
        </div>
      </div>
      <div className="rectangle-6"></div>
      <div className="depth-4-frame-6">
        <div className="div">
          <br />
          <button className="destination-button" onClick={() => fetchRoutes(center, destination)} style={{ cursor: "pointer" }}>
            {destination}
          </button>
        </div>
      </div>
      <div className="div2">원하는 경로를 선택하세요.</div>
      <div className="line-4"></div>
      {routes.map((route, index) => (
        <div key={index} className={`rectangle-${index + 7}`} onClick={() => handleRouteClick(index)} style={{ cursor: "pointer" }}>
          <div className="div">
            <span className="_1500-0-5-span">{route.summary}</span>
            <br />
            <span className="_1500-0-5-span2">
              Distance: {route.distance}, Duration: {route.duration}
            </span>
          </div>
        </div>
      ))}
      <div className="_65">(65세 이상 무료)</div>
      {routes.map((route, index) => (
        <div key={index} className={`div${index + 3}`}>{route.steps.find(step => step.transitDetails)?.arrivalStop}</div>
      ))}
      <img className="image-removebg-preview-23-1" src="image-removebg-preview-23-10.png" alt="Bus" />
      <img className="image-removebg-preview-24-1" src="image-removebg-preview-24-10.png" alt="Subway" />
      <div className="rectangle-52"></div>
      <BackButton onClick={handleGoBack} label="뒤로가기" />
      <div className="depth-3-frame-2">
        <div className="div5">
          <span>
            <CallButton onClick={handleNavigateToCall} label="안내원 도움 요청" />
          </span>{" "}
        </div>
      </div>
      {selectedRoute && (
        <LoadScript googleMapsApiKey={API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={14}
          >
            <DirectionsRenderer directions={{ routes: [selectedRoute] }} />
          </GoogleMap>
        </LoadScript>
      )}
    </div>
  );
};

export default Route;

