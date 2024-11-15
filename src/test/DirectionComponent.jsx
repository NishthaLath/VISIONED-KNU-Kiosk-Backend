import { DirectionsService, LoadScript } from "@react-google-maps/api";
import React, { useState } from "react";

const DirectionComponent = ({destination, onRouteCalculated }) => {
  const [isRouteCalculated, setIsRouteCalculated] = useState(false);

  const origin = "서울역";
  //초기 값이 false로 설정되어 있음
  
  /**
  *   origin: 출발지 정보를 받는 인수
  *   destination: 도착지 정보를 받는 인수
  *   onRouteCalculated: 경로 계산이 완료되었을 때 경로 데이터를 상위 컴포넌트로 전달하는 콜백 함수
  */


  const directionsCallback = (response, status) => {
    if (status === "OK") {
      setIsRouteCalculated(true);

/**
*    Google Maps Directions API의 응답을 처리하는 함수, DirectionsService에서 경로 계산이 완료되면 호출됨
*    상위 컴포넌트에서 전달된 onRouteCalculated 콜백 함수 호출하여 routesInfo 전달
*/

      // 경로 정보 추출 routesInfo 생성 
      const routesInfo = response.routes.map((route, routeIndex) => {
        const steps = route.legs[0].steps;
        const routeInstructions = steps.map((step) => {
          let instruction = step.instructions.replace(/<[^>]+>/g, "");

          return instruction
        });


        return {
          index: routeIndex + 1,
          duration: route.legs[0].duration.text,
          distance: route.legs[0].distance.text,
          instructions: routeInstructions,
        };
      });


      // 상위 컴포넌트로 경로 정보를 전달
      onRouteCalculated(routesInfo);
    } else {
      console.error("Directions request failed due to " + status);
    }
  };

  return (
    <LoadScript googleMapsApiKey= {process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      {!isRouteCalculated && (
        <DirectionsService
          options={{
            origin: origin,
            destination: destination,
            travelMode: "TRANSIT",
            provideRouteAlternatives: true,
          }}
          callback={directionsCallback}
        />
      )}
    </LoadScript>
  );
};

export default DirectionComponent;
