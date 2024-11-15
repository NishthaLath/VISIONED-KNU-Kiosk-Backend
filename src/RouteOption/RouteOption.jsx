/* eslint-disable no-unused-vars */
/* src/route_option/RouteOption.jsx */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CallButton from "../share/CallButton.jsx";
import BackButton from "../share/BackButton.jsx";
import { playTextToSpeech } from "../services/ttsService";
import "./RouteOption.css";

export const RouteOption = ({ className, ...props }) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const handleFresh = () => {
    if (!text) {
      playTextToSpeech('목적지 먼저 입력해주세요.');
      return;
    }
    playTextToSpeech('마이크를 노르고, 목적지를 다시 말씀해주세요.');
    navigate("/route_option");
    setText("");
  };

  const handleGoBack = () => {
    playTextToSpeech('이전 페이지로 돌아가겠습니다.');
    navigate("/voice"); 
  };

  const handleNavigateToCall = () => {
    playTextToSpeech('담당 정류장 안내원과 전화연결 중입니다. 잠시만 기다려주세요.');
    navigate("/call"); 
  };

  const handleNavigateToRoute = () => {
    if (!text) {
      playTextToSpeech('목적지 먼저 입력해주세요.');
      return;
    }
    navigate("/sub2", { state: { destination: text } }); // Navigate to the Sub2 page with the destination
  };

  const startRecording = () => {
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
      setText(transcript);
      playTextToSpeech(`${transcript} 입력하였습니다. 아래 도착지가 맞나요?`);
      setIsRecording(false);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error', event);
      setIsRecording(false);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.start();
  };

  return (
    <div className={"div " + className}>
        <BackButton
            onClick={handleGoBack} label="뒤로가기"/>
        <div className="rectangle-9"></div>
        <div className="line-upper"></div>
        <div className="line-middle"></div>
        <div className="line-lower"></div>
        <img
            className="deagu-logo"
            src="deagu-logo.png" alt = ""
        />
        <div className="call-button-frame">
            <CallButton onClick={handleNavigateToCall}/>
        </div>
        <div className="show-small-text">도착지를 듣고있어요.</div>
        <div className="below_dest">아래 도착지가 맞나요?</div>
        <div className="destination">{text || "목적지"}</div>

        <img className="mic" src="mic.png" onClick={startRecording} style={{ cursor: "pointer" }} alt = "" />

        <button className="div6"
                onClick={handleNavigateToRoute} style={{cursor: "pointer"}}> 예
        </button>
        <button className="div7"
                onClick={handleFresh} style={{cursor: "pointer"}}> 아니오
        </button>

    </div>
);
};

export default RouteOption;