/* eslint-disable no-unused-vars */
import "./Component.css";
import { useNavigate } from "react-router-dom";
import CallButton from "../../share/CallButton.jsx";
import BackButton from "../../share/BackButton.jsx";
import "../../share/allshared.css"
import React, {useState} from "react";

export const Component = ({ className, ...props }) => {
    const navigate = useNavigate();
    const [text, setText] = useState("");

    const handleGoBack = () => {
        navigate(-1); // Navigate to the previous page
    };

    const handleNavigateToCall = () => {
        navigate("/call"); // Navigate to the App.jsx in the 'call' directory
    };

    const handleNavigateToPrintTaxi = () => {
        navigate("/taxi_print"); // Update this path if "App.jsx" has a different route, e.g., "/app"
    };

  return (
      <div className={"div " + className}>
          <img
              className="deagu-logo"
              src="deagu-logo.png"
              alt = ""
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
              8분 후 도착 예정
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
                  onClick={handleNavigateToPrintTaxi} label="약도 출력"/>
          </div>

      </div>
  );
};
