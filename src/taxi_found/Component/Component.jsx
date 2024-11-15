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

    const handleNavigateToPrintTaxi = () => {
        playTextToSpeech('기사님 호출했습니다. 호출 정보가 출력되었습니다. 출력창을 확인해주세요.');
        navigate("/taxi_print");
    };

  return (
      <div className={"div " + className}>
          <img
              className="deagu-logo"
              src="deagu-logo.png" alt = ""
          />
          <div className="line-upper"></div>
          <div className="line-middlelower"></div>
          <BackButton
              onClick={handleGoBack} label="뒤로가기"/>
          <div className="call-button-frame">
              <CallButton onClick={handleNavigateToCall}/>
          </div>


          <div className="show-big-text">
              <br/>
              근처에 있는
              <br/>
              택시를 찾았어요.{" "}
              <br/>
              8분 후 도착 예정.
          </div>

          <div className="taxi-info-frame">
              <div className="info_taxi">
                  김경대
                  <br/>
                  12바 0159
                  <br/>
                  YF소나타
              </div>
              <img className="image-15" src="people.png" alt = ""/>
          </div>

          <div className="print_taxi_to">
              <CallButton
                  onClick={handleNavigateToPrintTaxi} label="기사님 호출"/>
          </div>

      </div>
  );
};