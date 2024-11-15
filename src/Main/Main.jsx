import React from "react";
import { useNavigate } from "react-router-dom";
import CallButton from "../share/CallButton.jsx";
import "./Main.css";
import { playTextToSpeech } from "../services/ttsService";


export const Main = ({ className, ...props }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        playTextToSpeech("안녕하세요, 도착지 약도 출력 서비스 입니다. 마이크 버튼을 누른 후 목적지를 말씀해 주시거나, 검색창에 입력해 주세요. 안내원의 도움이 필요하신 경우, 아래에 있는 안내원 도움 요청하기 버튼을 눌러주세요.", 1.0);
        navigate("/voice");
    };

    const handleNavigateToCall = () => {
        playTextToSpeech("안내원 도움 요청하기 버튼을 눌렀습니다. 안내원이 도움을 드리러 오겠습니다.", 1.0);
        navigate("/call");
    }

    return (
        <div className={"main " + className}>
            <img
                className="image-removebg-preview-19-2"
                src="image-removebg-preview-19-20.png"
                alt = ""
            />
            <div className="div2">
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
            <div className="depth-3-frame-2">
                <CallButton onClick={handleNavigateToCall} label="안내원 도움 요청"/>
            </div>
            <div className="line-5"></div>
            <div className="line-2"></div>
        </div>
    );
};

export default Main;