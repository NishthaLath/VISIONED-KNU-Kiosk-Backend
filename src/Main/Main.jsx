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

    useEffect(() => {
        const message = "안녕하세요, 길 안내 및 택시 호출 서비스 입니다. 안내원의 도움이 필요하신 경우, 아래에 있는 안내원 도움 요청하기 버튼을 눌러주세요";
        setTimeout(() => {
            playTextToSpeech(message, 1.0);
        }); 
    }, []);

    const handleNavigate = () => {
        playTextToSpeech("서비스를 시작합니다. 완하는 이동수단을 선택해 주세요.", 1.0);
        navigate("/choose");
    };

    const handleNavigateToCall = () => {
        playTextToSpeech("안내원 도움 요청하기 버튼을 눌렀습니다. 담당 정류장 안내원과 전화연결 중입니다. 잠시만 기다려주세요.", 1.0);
        navigate("/call");
    }
    
    return (
        <div className={"main " + className}>
            <img
                className="deagu-logo"
                src="deagu-logo.png"
                alt="대구광역시 로고"
            />
            <div className="show-big-text">
                간편한 길 안내와
                <br/>
                택시 호출이
                <br/>
                필요하시나요?{" "}
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
            <div className="line-upper"></div>
            <div className="line-lower"></div>
        </div>
    );
};

export default Main;