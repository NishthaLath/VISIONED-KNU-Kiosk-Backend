import React from "react";
import { useNavigate } from "react-router-dom";
import CallButton from "../share/CallButton.jsx";
import BackButton from "../share/BackButton.jsx";
import "./choose.css";
import "../share/allshared.css";
import { playTextToSpeech } from "../services/ttsService.js";

export const Choose = ({ className, ...props }) => {
    const navigate = useNavigate();

    const handleGoBack = async () => {
        playTextToSpeech('이전 페이지로 돌아가겠습니다.');
        navigate(-1);
      };

    const handleNavigate = () => {
        playTextToSpeech('대중교통 페이지로 이동합니다. 도착지를 검색하시거나 버튼을 누르고 말해주세요.');
        navigate("/voice");
    };

    const handleNavigateToCall = () => {
        playTextToSpeech("안내원 도움 요청하기 버튼을 눌렀습니다. 안내원과 연결 중입니다. 잠시만 기다려주세요.", 1.0);
        navigate("/call");
    }

    const handleNavigateToFindingTaxi = () => {
        playTextToSpeech('택시 페이지로 이동합니다. 택시를 호출하시겠습니까?');
        navigate("/taxi_find");
    }

    return (
        <div className={"choose " + className}>
            <img
                className="deagu-logo"
                src="deagu-logo.png"
                alt = ""
            />
            <div className="show-big-text">
                이동수단을
                <br/>
                선택해주세요.
            </div>
            <div className="frame-1">
                <button onClick={handleNavigate} className="navigate-button">
                    대중교통
                </button>
            </div>

            <div className="frame-2">
                <button onClick={handleNavigateToFindingTaxi} className="navigate-button">
                    택시
                </button>
            </div>

            <div className="call-button-frame">
                <CallButton onClick={handleNavigateToCall}/>
            </div>
            <div className="line-upper"></div>
            <div className="line-lower"></div>
            <BackButton
                onClick={handleGoBack} label="뒤로가기"/>
        </div>
    );
};
export default Choose;