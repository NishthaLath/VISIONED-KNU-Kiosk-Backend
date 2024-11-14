/* src/route_option/RouteOption.jsx */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./RouteOption.css";
import { playTextToSpeech } from "../services/ttsService";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 37.5665,
  lng: 126.9780,
};

const googleMapsApiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your Google Maps API key

export const RouteOption = () => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [transcription, setTranscription] = useState("");
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Your browser does not support the Web Speech API. Please use a supported browser.');
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'ko-KR';

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setTranscription(transcript);
      playTextToSpeech(`${transcript} 입력하였습니다.`);
      searchPlaces(transcript);
      setIsRecording(false);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event);
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    if (isRecording) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => {
      recognition.stop();
    };
  }, [isRecording]);

  const searchPlaces = (query) => {
    const service = new window.google.maps.places.PlacesService(document.createElement('div'));
    const request = {
      query: query,
      fields: ['name', 'geometry'],
      locationBias: center,
      rankBy: window.google.maps.places.RankBy.PROMINENCE,
    };

    service.textSearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setLocations(results.slice(0, 3)); // Get up to 3 locations
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
    playTextToSpeech('선택한 경로를 확인하세요');
    navigate("/check");
  };

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  return (
    <div className="route-option">
      <div className="depth-4-frame-52">
        <div className="div2">듣고 있습니다......</div>
      </div>

      <div className="instructions depth-4-frame-11">
        <p>이렇게 말씀 해보세요:</p>
        <ul className="example-phrases">
          <li>“대구역”</li>
          <li>“이월드”</li>
          <li>“신세계백화점”</li>
        </ul>
      </div>

      <div className="user-input-placeholder depth-4-frame-6">
        {transcription || "목적지"}
      </div>

      <div className="microphone-icon">
        <img src="image-removebg-preview-19-20.png" alt="Microphone" onClick={startRecording} />
      </div>

      <button onClick={stopRecording}>Stop</button>

      <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={['places']}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={12}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              position={location.geometry.location}
              title={location.name}
            />
          ))}
        </GoogleMap>
      </LoadScript>

      <div className="depth-3-frame-2">
        <div className="depth-4-frame-0">
          <button className="help-request-button" onClick={handleNavigateToCall}>
            안내원 도움 요청하기
          </button>
        </div>
      </div>

      <div className="depth-4-frame-53">
        <button className="back-button" onClick={handleGoBack}>
          뒤로가기
        </button>
      </div>

      <div className="depth-4-frame-54">
        <button className="next-button" onClick={handleNavigateToCheck}>
          선택한 경로를 확인하세요.
        </button>
      </div>
    </div>
  );
};

export default RouteOption;