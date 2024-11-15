import "./Sub1.css";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import CallButton from "../../share/CallButton.jsx";
import BackButton from "../../share/BackButton.jsx";
import "../../share/allshared.css"
import { playTextToSpeech } from "../../services/ttsService";

export const Sub1 = ({ className, ...props }) => {
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

  const handleNavigateToRouteOption = async () => {
    playTextToSpeech('화면에 있는 마이크를 노르고, 목적지를 말해주세요.');
    navigate("/route_option"); 
  };

  return (
    <div className={"sub-1 " + className}>
      <div className="group-3">
        <div className="group-2">
          <div className="group-1">
            <div className="line-upper"></div>
            <div className="line-lower"></div>
              <BackButton
                  onClick={handleGoBack} label="뒤로가기"/>
            <div className="rectangle-2">
              <button className="record-button" onClick={handleNavigateToRouteOption} style={{cursor: "pointer"}}>
                버튼을 누르고
                <br/>
                도착지를 말해주세요.{" "}
              </button>
            </div>
            <div className="rectangle-4">
              <input
                  type="text"
                  className="div4"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="  목적지"
              />
            </div>
            <img
                className="deagu-logo"
                src="deagu-logo.png" alt = ""
            />
            <img className="image" src="image0.png" alt = ""/>
          </div>
        </div>
        <div className="call-button-frame">
          <CallButton onClick={handleNavigateToCall}/>
        </div>
      </div>
    </div>
  );
};

export default Sub1;