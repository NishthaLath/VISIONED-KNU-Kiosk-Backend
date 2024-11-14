/* src/route/Route.jsx */
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, DirectionsRenderer } from "@react-google-maps/api";
import "./Route.css";
import { playTextToSpeech } from "../../services/ttsService";

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

  useEffect(() => {
    if (location.state && location.state.location) {
      fetchRoute(location.state.location);
    }
  }, [location.state]);

  const fetchRoute = (destination) => {
    const directionsService = new window.google.maps.DirectionsService();
    const request = {
      origin: center,
      destination: { lat: destination.lat, lng: destination.lng },
      travelMode: window.google.maps.TravelMode.TRANSIT,
      transitOptions: {
        modes: ['BUS', 'SUBWAY'],
      },
      provideRouteAlternatives: true,
    };

    directionsService.route(request, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        setDirections(result);
        setRouteInfo(result.routes.slice(0, 3).map(route => ({
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

  return (
    <div className="route">
      <div className="depth-4-frame-52">
        <div className="div2">경로 정보</div>
      </div>

      <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
        >
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      </LoadScript>

      <div className="route-info">
        {routeInfo.map((route, index) => (
          <div key={index} className="route-option">
            <h3>경로 {index + 1}</h3>
            <p>시간: {route.duration}</p>
            <p>거리: {route.distance}</p>
            <ul>
              {route.steps.map((step, stepIndex) => (
                <li key={stepIndex}>
                  <p>{step.instructions}</p>
                  <p>이동 수단: {step.travelMode}</p>
                  <p>시간: {step.duration}</p>
                  <p>거리: {step.distance}</p>
                  {step.transitDetails && (
                    <div>
                      <p>버스 번호: {step.transitDetails.line}</p>
                      <p>차량 유형: {step.transitDetails.vehicle}</p>
                      <p>정류장 수: {step.transitDetails.numStops}</p>
                      <p>출발 정류장: {step.transitDetails.departureStop}</p>
                      <p>도착 정류장: {step.transitDetails.arrivalStop}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="depth-4-frame-53">
        <button className="back-button" onClick={handleGoBack}>
          뒤로가기
        </button>
      </div>
    </div>
  );
};

export default Route;