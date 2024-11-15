/* eslint-disable no-unused-vars */
/* src/route/Route.jsx */
import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  GoogleMap, 
  DirectionsRenderer,
  useJsApiLoader,
  Autocomplete,
} from '@react-google-maps/api';
import "./Route.css";
import { playTextToSpeech } from "../../services/ttsService";
import CallButton from "../../share/CallButton.jsx";
import BackButton from "../../share/BackButton.jsx";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

// 경북대학교정문앞 coordinates
const center = {
  lat: 35.8840,
  lng: 128.6132,
};

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const Route = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [destination, setDestination] = useState("");
  const [loading, setLoading] = useState(false);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const destinationRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
    libraries: ["places"],
  });

  useEffect(() => {
    if (location.state && location.state.destination) {
      setDestination(location.state.destination);
      calculateRoute(location.state.destination);
    }
  }, [location.state]);

  const calculateRoute = async (destination) => {
    if (!destination) {
      return;
    }
    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: center,
      destination: destination,
      travelMode: window.google.maps.TravelMode.TRANSIT,
    });
    console.log('Directions results:', results);
    setRoutes(results.routes);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  };

  const handlePlaceChanged = () => {
    if (destinationRef.current && destinationRef.current.value) {
      setDestination(destinationRef.current.value);
      calculateRoute(destinationRef.current.value);
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

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

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
          <Autocomplete onLoad={(ref) => (destinationRef.current = ref)} onPlaceChanged={handlePlaceChanged}>
            <input type="text" placeholder="목적지" style={{ width: "100%", padding: "10px", fontSize: "16px" }} />
          </Autocomplete>
        </div>
      </div>
      <div className="div2">원하는 경로를 선택하세요.</div>
      <div className="line-4"></div>
      {loading ? (
        <div>Loading routes...</div>
      ) : (
        routes.map((route, index) => (
          <div key={index} className={`rectangle-${index + 7}`} onClick={() => handleRouteClick(index)} style={{ cursor: "pointer" }}>
            <div className="div">
              <span className="_1500-0-5-span">{route.summary}</span>
              <br />
              <span className="_1500-0-5-span2">
                Distance: {route.legs[0].distance.text}, Duration: {route.legs[0].duration.text}
              </span>
            </div>
          </div>
        ))
      )}
      <div className="_65" onClick={handleNavigateToCheck} style={{ cursor: "pointer" }}>(Do you want to choose above route?)</div>
      {routes.map((route, index) => (
        <div key={index} className={`div${index + 3}`}>{route.legs[0].steps.find(step => step.transitDetails)?.arrivalStop}</div>
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
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={14}
        >
          <DirectionsRenderer directions={{ routes: [selectedRoute] }} />
        </GoogleMap>
      )}
      <div className="route-info">
        <p>Distance: {distance}</p>
        <p>Duration: {duration}</p>
      </div>
    </div>
  );
};

export default Route;