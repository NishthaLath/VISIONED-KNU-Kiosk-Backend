/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom";
import TypewriterText from "./TypewriterText";
import CallButton from "../share/CallButton.jsx";
import "./Main.css";
import "../share/allshared.css";
import { playTextToSpeech } from "../services/ttsService";


export const Main = ({ className, ...props }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        playTextToSpeech("안녕하세요, 도착지 약도 출력 서비스 입니다. 대중교통이나 택시를 선택하시기 바랍니다.. 안내원의 도움이 필요하신 경우, 아래에 있는 안내원 도움 요청하기 버튼을 눌러주세요.", 1.0);
        navigate("/choose");
    };

    const handleNavigateToCall = () => {
        playTextToSpeech("안내원 도움 요청하기 버튼을 눌렀습니다. 안내원이 도움을 드리러 오겠습니다.", 1.0);
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
                도착지 약도
                <br/>
                출력 서비스를
                <br/>
                시작하겠습니다.{" "}
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