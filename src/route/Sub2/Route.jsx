/* eslint-disable no-unused-vars */
/* src/route/Route.jsx */
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, DirectionsRenderer } from "@react-google-maps/api";
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

const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY;

export const Route = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [directions, setDirections] = useState(null);
  const [routeInfo, setRouteInfo] = useState([]);
  const [destination, setDestination] = useState("");

  useEffect(() => {
    if (location.state && location.state.destination) {
      setDestination(location.state.destination);
    }
  }, [location.state]);

  const fetchRoute = () => {
    const directionsService = new window.google.maps.DirectionsService();
    const request = {
      origin: center,
      destination: destination,
      travelMode: window.google.maps.TravelMode.TRANSIT,
      transitOptions: {
        modes: ['BUS', 'SUBWAY'],
      },
      provideRouteAlternatives: true,
    };

    directionsService.route(request, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        setDirections(result);
        setRouteInfo(result.routes.slice(0, 2).map(route => ({
          duration: route.legs[0].duration.text,
          distance: route.legs[0].distance.text,
          steps: route.legs[0].steps.map(step => ({
            travelMode: step.travel_mode,
            instructions: step.instructions,
            duration: step.duration.text,
            distance: step.distance.text,
            transitDetails: step.transit ? {
              line: step.transit.line.short_name,
              vehicle: step.transit.line.vehicle.type,
              numStops: step.transit.num_stops,
              departureStop: step.transit.departure_stop.name,
              arrivalStop: step.transit.arrival_stop.name,
            } : null,
          })),
        })));
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
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
          <button className="destination-button" onClick={fetchRoute} style={{ cursor: "pointer" }}>
            {destination}
          </button>
        </div>
      </div>
      <div className="div2">원하는 경로를 선택하세요.</div>
      <div className="line-4"></div>
      {routeInfo.map((route, index) => (
        <div key={index} className={`depth-4-frame-${index + 12}`} onClick={handleNavigateToCheck} style={{ cursor: "pointer" }}>
          <div className={`_1500-${index}-5`}>
            <span>
              <span className={`_1500-${index}-5-span`}>
                <br />
              </span>
              <span className={`_1500-${index}-5-span2`}>
                비용: 1500원 | 환승 {route.steps.filter(step => step.transitDetails).length - 1}회 | 도보 {route.steps.filter(step => step.travelMode === 'WALKING').reduce((acc, step) => acc + parseInt(step.duration), 0)}분
                <br />
              </span>
            </span>{" "}
          </div>
        </div>
      ))}
      <div className="_65">(65세 이상 무료)</div>
      {routeInfo.map((route, index) => (
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
    </div>
  );
};

export default Route;