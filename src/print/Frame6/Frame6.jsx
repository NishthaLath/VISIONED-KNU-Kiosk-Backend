import "./Frame6.css";
import { useNavigate } from "react-router-dom";
import { playTextToSpeech } from "../../services/ttsService";

export const Frame6 = ({ className, ...props }) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        playTextToSpeech('이전 페이지로 돌아가겠습니다.');
        navigate(-1); // Navigate to the previous page
    };

    const handleNavigateToCall = () => {
        playTextToSpeech('담당 정류장 안내원과 전화연결 중입니다. 잠시만 기다려주세요.');
        navigate("/call"); // Navigate to the App.jsx in the 'call' directory
    };

  return (
    <div className={"frame-6 " + className}>
      <img
        className="image-removebg-preview-19-2"
        src="image-removebg-preview-19-20.png"
        alt = ""
      />
      <div className="image-7"></div>
      <div className="image-8"></div>
      <div className="line-2"></div>
      <div className="depth-4-frame-24">
        <div className="div">
          <br />
          약도가 출력되었습니다.
          <br />
          <br />
          <br />
          하단의 출력창을 <br />
          <br />
          <br />
          확인하세요.{" "}
        </div>
      </div>
      <div className="line-3"></div>
      <div className="depth-3-frame-1">
        <div className="depth-4-frame-1">
          <div className="div2">
            <span>
              <span className="div-2-span">
                <br />
              </span>
              <span onClick={handleNavigateToCall} className="div-2-span2">안내원 도움 요청하기</span>
            </span>{" "}
          </div>
        </div>
      </div>
      <div className="rectangle-2"></div>
      <div className="depth-4-frame-2">
        <div className="div2" onClick={handleGoBack} style={{cursor: "pointer"}}>
          <span>
            <span className="div-2-span3">
              <br />
            </span>
            <span className="div-2-span4">뒤로가기</span>
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Frame6;