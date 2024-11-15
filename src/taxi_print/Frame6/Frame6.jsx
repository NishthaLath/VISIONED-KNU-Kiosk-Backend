import "./Frame6.css";
import { useNavigate } from "react-router-dom";
import CallButton from "../../share/CallButton.jsx";
import BackButton from "../../share/BackButton.jsx";
import "../../share/allshared.css"
import React from "react";
import { playTextToSpeech } from "../../services/ttsService";


export const Frame6 = ({ className, ...props }) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        playTextToSpeech("메인 페이지로 돌아가겠습니다.");
        navigate("/"); 
    };

    const handleNavigateToCall = () => {
        playTextToSpeech('안내원 도움 요청하기 버튼을 눌렀습니다. 안내원과 연결 중입니다. 잠시만 기다려주세요.');
        navigate("/call");
    };

  return (
      <div className={"frame-6 " + className}>
          <img
              className="deagu-logo"
              src="deagu-logo.png"
              alt = ""
          />
          <div className="line-upper"></div>
          <div className="line-lower"></div>
          <div className="div3">
              <br/>
              기사님 정보가
              <br/>
              출력되었습니다.
              <br/>
              하단의 출력창을
              <br/>
              확인해주세요.
          </div>

          <div className="call-button-frame">
              <CallButton
                  onClick={handleNavigateToCall}/>
          </div>
          <BackButton
              onClick={handleGoBack} label="처음으로"/>

          <img className="image-receipt" src="receipt.png" alt = ""/>
      </div>
  );
};
