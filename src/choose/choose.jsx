import React from "react";
import { useNavigate } from "react-router-dom";
import CallButton from "../share/CallButton.jsx";
import BackButton from "../share/BackButton";
import "../share/allshared.css";

export const choose = ({ className, ...props }) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    const handleNavigate = () => {
        navigate("/voice");
    };

    const handleNavigateToCall = () => {
        navigate("/call");
    }


    return (
        <div className={"main " + className}>
            <img
                className="deagu-logo"
                src="deagu-logo.png" alt = "대구로고"
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
            <BackButton
                onClick={handleGoBack} label="뒤로가기"/>
        </div>
    );
};

export default choose;