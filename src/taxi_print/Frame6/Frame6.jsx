import "./Frame6.css";
import { useNavigate } from "react-router-dom";
import CallButton from "../../share/CallButton.jsx";
import BackButton from "../../share/BackButton.jsx";
import "../../share/allshared.css"

export const Frame6 = ({ className, ...props }) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    const handleNavigateToCall = () => {
        navigate("/call"); // Navigate to the App.jsx in the 'call' directory
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
              onClick={handleGoBack} label="뒤로가기"/>

          <img className="image-receipt" src="receipt.png" alt = ""/>
      </div>
  );
};
