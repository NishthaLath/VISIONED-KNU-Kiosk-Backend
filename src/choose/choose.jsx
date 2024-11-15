import React from "react";
import { useNavigate } from "react-router-dom";
import CallButton from "../share/CallButton.jsx";
import BackButton from "../share/BackButton.jsx";
import "./choose.css";
import "../share/allshared.css";
import { playTextToSpeech } from "../services/ttsService.js";

export const Choose = ({ className, ...props }) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    const handleNavigate = () => {
        navigate("/voice");
    };

    const handleNavigateToCall = () => {
        playTextToSpeech("안내원 도움 요청하기 버튼을 눌렀습니다. 안내원이 도움을 드리러 오겠습니다.", 1.0);
        navigate("/call");
    }

    // test용 임시 함수 생성
    const handleNavigateToFindingTaxi = () => {
        navigate("/taxi_find");
    }

    return (
        <div className={"choose " + className}>
            <img
                className="deagu-logo"
                src="deagu-logo.png" alt = "대구로고"
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