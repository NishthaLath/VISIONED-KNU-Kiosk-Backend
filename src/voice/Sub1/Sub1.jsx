import "./Sub1.css";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import CallButton from "../../share/CallButton.jsx";
import BackButton from "../../share/BackButton.jsx";

export const Sub1 = ({ className, ...props }) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleGoBack = async () => {
    try {
      const response = await fetch('http://localhost:3001/synthesize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: '이전 페이지로 돌아가겠습니다.' }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();

      navigate(-1);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleNavigateToCall = async () => {
    try {
      const response = await fetch('http://localhost:3001/synthesize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: '담당 정류장 안내원과 전화연결 중입니다. 잠시만 기다려주세요.' }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();

      navigate("/call"); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleNavigateToRouteOption = async () => {
    try {
      const response = await fetch('http://localhost:3001/synthesize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: '목적지를 말해주세요.' }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audio.play();

      navigate("/route_option"); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={"sub-1 " + className}>
      <div className="group-3">
        <div className="group-2">
          <div className="group-1">
            <div className="line-2"></div>
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
                className="image-removebg-preview-19-2"
                src="image-removebg-preview-19-20.png"
                alt = "image-removebg-preview-19-20"
            />
            <img className="image" src="image0.png" alt = ""/>
          </div>
        </div>
        <div className="depth-3-frame-2">
            <div className="div">
              <span>
                  <CallButton
                      onClick={handleNavigateToCall} label="안내원 도움 요청"/>
              </span>{" "}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Sub1;