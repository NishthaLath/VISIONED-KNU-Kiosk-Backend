import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sub1.css";

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

  const handleNavigateToRoute = async () => {
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
            <div className="rectangle-1"></div>
            <div className="rectangle-2"></div>
            <div className="rectangle-4"></div>
            <div className="depth-4-frame-1">
              <div className="div" onClick={handleGoBack} style={{ cursor: "pointer" }}>
                <span>
                  <span className="div-span">
                    <br />
                  </span>
                  <span className="div-span2">뒤로가기</span>
                </span>{" "}
              </div>
            </div>
            <div className="depth-4-frame-2">
              <div className="div2" onClick={handleNavigateToRoute} style={{ cursor: "pointer" }}>
                <br />
                버튼을 누르고
                <br />
                <br />
                도착지를 말해주세요.{" "}
              </div>
            </div>
            <img
              className="image-removebg-preview-18-1"
              src="image-removebg-preview-18-10.png"
              alt="image-removebg-preview-18-10"
            />
            <img
              className="image-removebg-preview-19-2"
              src="image-removebg-preview-19-20.png"
              alt="image-removebg-preview-19-20"
            />
            <img className="image" src="image0.png" alt="" />
            <div className="depth-4-frame-4">
              <input
                type="text"
                className="div4"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="목적지"
              />
            </div>
          </div>
        </div>
        <div className="depth-3-frame-2">
          <div className="depth-4-frame-0">
            <div className="div">
              <span>
                <span className="div-span3">
                  <br />
                </span>
                <span onClick={handleNavigateToCall} className="div-span4">안내원 도움 요청하기</span>
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sub1;