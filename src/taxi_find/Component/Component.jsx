/* eslint-disable no-unused-vars */
import "./Component.css";
import { useNavigate } from "react-router-dom";
import CallButton from "../../share/CallButton.jsx";
import BackButton from "../../share/BackButton.jsx";
import "../../share/allshared.css"
import React, {useState} from "react";
import { playTextToSpeech } from "../../services/ttsService";

export const Component = ({ className, ...props }) => {

    const navigate = useNavigate();
    const [text, setText] = useState("");

    const handleGoBack = () => {
        playTextToSpeech('이전 페이지로 돌아가겠습니다.');
        navigate(-1); 
    };

    const handleNavigateToCall = () => {
        playTextToSpeech('안내원 도움 요청하기 버튼을 눌렀습니다. 안내원과 연결 중입니다. 잠시만 기다려주세요.');
        navigate("/call");
    };

    const handleNavigateToFound = () => {
        playTextToSpeech('주위에 있는 택시를 찾았습니다. 기사님을 호출하고 싶으시면 확인 버튼을 눌러주세요.');
        navigate("/taxi_found");
    };

    return (
        <div className={"div " + className}>
            <img
                className="deagu-logo"
                src="deagu-logo.png" alt="대구로고"
            />
            <BackButton
                onClick={handleGoBack} label="뒤로가기"/>
            <div className="call-button-frame">
                <CallButton onClick={handleNavigateToCall}/>
            </div>
            <div className="line-upper"></div>
            <div className="line-lower"></div>

            <div className="show-big-text">
                <br/>
                주위에 있는
                <br/>
                택시를
                <br/>
                호출할까요?
            </div>

            <button className="div6"
                onClick={handleNavigateToFound} style={{cursor: "pointer"}}> 예</button>
            <button className="div7" onClick={handleGoBack} style={{cursor: "pointer"}}>아니오</button>
            <img className="image-13" src="deaguro.png" alt="대구로고"/>
        </div>
    );
};