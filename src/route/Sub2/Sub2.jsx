import React from "react";
import "./Sub2.css";
import { useNavigate } from "react-router-dom";
import { playTextToSpeech } from "../../services/ttsService";

export const Sub2 = ({ className, ...props }) => {
    const navigate = useNavigate();

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
  
        // Navigate to the route after the audio starts playing
        navigate("/call"); // Update this path if "App.jsx" has a different route, e.g., "/app"
      } catch (error) {
        console.error('Error:', error);
      }
    };

  const handleNavigateToCheck = () => {
    playTextToSpeech("선택한 경로를 확인하시고 약도 출력하기 버튼을 눌러주세요.", 1.0);
    navigate("/check");
  };

    return (
    <div className={"sub-2 " + className}>
      <div className="rectangle-7"
           onClick={handleNavigateToCheck} style={{ cursor: "pointer" }}></div>
      <div className="rectangle-8"
           onClick={handleNavigateToCheck} style={{ cursor: "pointer" }}></div>
      <img
        className="image-removebg-preview-19-2"
        src="image-removebg-preview-19-20.png"
        alt = ""
      />
      <div className="rectangle-5"></div>
      <div className="depth-4-frame-5">
        <div className="div">
          <br />현 위치(경북대 정문){" "}
        </div>
      </div>
      <div className="rectangle-6"></div>
      <div className="depth-4-frame-6">
        <div className="div">
          <br />
          수성코오롱하늘채{" "}
        </div>
      </div>
      <div className="depth-4-frame-52">
        <div className="div2">
          <br />
          원하는 경로를 선택하세요.{" "}
        </div>
      </div>
      <div className="line-4"></div>
      <div className="depth-4-frame-12">
        <div className="_1500-0-5">
          <span>
            <span className="_1500-0-5-span">
              <br />
            </span>
            <span className="_1500-0-5-span2">
              비용: 1500원 | 환승 0회 | 도보 5분
              <br />
            </span>
          </span>{" "}
        </div>
      </div>
      <div className="depth-4-frame-14">
        <div className="_1500-1-17">
          <span>
            <span className="_1500-1-17-span">
              <br />
            </span>
            <span className="_1500-1-17-span2">
              비용: 1500원 | 환승 1회 | 도보 17분
              <br />
            </span>
          </span>{" "}
        </div>
      </div>
      <div className="_65">(65세 이상 무료) </div>
      <div className="div3">동일초등학교 앞 하차 </div>
      <div className="div4">수성시장역 하차 </div>
      <img
        className="image-removebg-preview-23-1"
        src="image-removebg-preview-23-10.png"
        alt = ""
      />
      <img
        className="image-removebg-preview-24-1"
        src="image-removebg-preview-24-10.png"
        alt = ""
      />
      <div className="rectangle-52"></div>
        <div className="depth-4-frame-53">
            <div className="div5" onClick={handleGoBack} style={{cursor: "pointer"}}>
          <span>
            <span className="div-5-span">
              <br/>
            </span>
            <span className="div-5-span2">뒤로가기</span>
          </span>{" "}
            </div>
        </div>
        <div className="depth-3-frame-2">
            <div className="depth-4-frame-0">
          <div className="div5">
            <span>
              <span className="div-5-span3">
                <br />
              </span>
              <span onClick={handleNavigateToCall} className="div-5-span4">안내원 도움 요청하기</span>
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sub2;