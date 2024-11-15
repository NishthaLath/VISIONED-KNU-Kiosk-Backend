/* eslint-disable no-unused-vars */
import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import TypewriterText from "./TypewriterText";
import CallButton from "../share/CallButton.jsx";
import "./Main.css";
import "../share/allshared.css";
import { playTextToSpeech } from "../services/ttsService";


export const Main = ({ className, ...props }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        playTextToSpeech("안녕하세요, 서비스를 시작합니다. 도움이 필요하신 경우, 아래 버튼을 노르고 안내원과 연락할 수 있습니다. 완하는 이동수단을 선택해 주세요.", 1.0);
        navigate("/choose");
    };

    const handleNavigateToCall = () => {
        playTextToSpeech("안내원 전화버튼을 눌렀습니다. 담당 정류장 안내원과 전화연결 중입니다. 잠시만 기다려주세요.", 1.0);
        navigate("/call");
    }

    const handleNavigateToTest = () => {
        navigate("/test");
    }
    
    return (
        <div className={"main " + className}>
            <img
                className="deagu-logo"
                src="deagu-logo.png" alt = ""
            />
            <div className="show-big-text">
                간편한 길안내와
                <br/>
                택시 호출이
                <br/>
                필요하시나요?
            </div>
            <div className="depth-3-frame-1">
                <br/>
                <button onClick={handleNavigate} className="navigate-button">
                    시작하기
                </button>
            </div>
            <div className="call-button-frame">
                <CallButton onClick={handleNavigateToCall}/>
            </div>
            <div className="test-button-frame">
                <button className="test-button" onClick={handleNavigateToTest}>test</button>
            </div>
            <div className="line-upper"></div>
            <div className="line-lower"></div>
        </div>
    );
};

export default Main;