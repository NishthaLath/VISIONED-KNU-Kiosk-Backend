import React, { useState } from "react";
import DirectionComponent from "./DirectionComponent"; // Adjust the import path based on your project structure

export const Test = ({ className, ...props }) => {
  const [destination, setDestination] = useState("");
  const [routesInfo, setRoutesInfo] = useState(null);

  const handleRouteCalculated = (routes) => {
    setRoutesInfo(routes); // DirectionComponent에서 전달받은 경로 정보 저장
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!destination) {
      alert("도착지를 입력해주세요.");
      return;
    }
    setRoutesInfo(null); // 새로운 요청 전에 기존 결과 초기화
  };

  return (
    <div className={`test-page ${className}`}>
      <h1>경로 정보</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <label htmlFor="destination" style={{ marginRight: "10px" }}>
          도착지:
        </label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="도착지를 입력하세요"
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button
          type="submit"
          style={{
            padding: "5px 10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          경로 확인
        </button>
      </form>

      {/* DirectionComponent 호출 */}
      {destination && (
        <DirectionComponent
          destination={destination} // 하드코딩된 origin은 DirectionComponent에서 사용
          onRouteCalculated={handleRouteCalculated}
        />
      )}

      {/* 경로 정보 출력 */}
      {routesInfo && (
        <div style={{ marginTop: "20px" }}>
          <h2>경로 상세 정보</h2>
          {routesInfo.map((route) => (
            <div
              key={route.index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
              }}
            >
              <h3>경로 {route.index}</h3>
              <p>소요 시간: {route.duration}</p>
              <p>거리: {route.distance}</p>
              <h4>단계별 지침:</h4>
              <ul>
                {route.instructions.map((instruction, idx) => (
                  <li key={idx}>{instruction}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Test;
