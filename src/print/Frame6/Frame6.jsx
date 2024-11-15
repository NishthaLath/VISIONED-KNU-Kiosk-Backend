import "./Frame6.css";
import { useNavigate } from "react-router-dom";
import CallButton from "../../share/CallButton.jsx";
import BackButton from "../../share/BackButton.jsx";
import "../../share/allshared.css"
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
                className="deagu-logo"
                src="deagu-logo.png" alt = ""
            />
            <div className="line-upper"></div>
            <div className="line-lower"></div>
            <div className="div3">
                <br/>
                약도가 출력되었습니다.
                <br/>
                하단의 출력창을
                <br/>
                확인하세요.{" "}
            </div>
  
            <div className="call-button-frame">
                <div className="div2">
                <CallButton
                    onClick={handleNavigateToCall}/>
                </div>
            </div>
            <BackButton
                onClick={handleGoBack} label="뒤로가기"/>
  
            <img className="image-receipt" src="receipt.png" alt = ""/>
        </div>
    );
};

export default Frame6;