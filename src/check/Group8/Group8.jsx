import "./Group8.css";
import { useNavigate } from "react-router-dom";

export const Group8 = ({ className, ...props }) => {
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

  const handleNavigateToPrint = () => {
    navigate("/print"); // Navigates to the App.jsx in the "check" directory
  };

  return (
    <div className={"group-8 " + className}>
      <div className="frame-4">
        <img
          className="image-removebg-preview-19-2"
          src="image-removebg-preview-19-20.png"
          alt =""
        />
        <div className="depth-2-frame-0">
          <div className="depth-3-frame-0"
               onClick={handleNavigateToPrint} style={{ cursor: "pointer" }}>
            <div className="div">
              <br/>
              약도 출력하기{" "}
            </div>
          </div>
        </div>
        <div className="depth-2-frame-1">
          <div className="depth-3-frame-02"></div>
        </div>
        <div className="depth-4-frame-9">
          <div className="_1500-0-17">
            <span>
              <span className="_1500-0-17-span">
                <br />
              </span>
              <span className="_1500-0-17-span2">
                비용: 1500원 | 환승 0회 | 도보 17분
              </span>
            </span>{" "}
          </div>
          <div className="div2">
            <br />
            동대구역{" "}
          </div>
        </div>
        <div className="depth-4-frame-10">
          <div className="_12">
            <span>
              <span className="_12-span">
                <br />
              </span>
              <span className="_12-span2">신천역까지 걸어가기(12분)</span>
            </span>{" "}
          </div>
        </div>
        <div className="depth-4-frame-11">
          <div className="div3">
            <br />
            공고네거리 방향으로 직진{" "}
          </div>
        </div>
        <img
          className="image-removebg-preview-21-1"
          src="image-removebg-preview-21-10.png"
          alt = ""
        />
        <div className="depth-4-frame-5">
          <div className="div4">
            <br />
            선택한 경로를 확인하세요.{" "}
          </div>
        </div>
        <div className="image-1"></div>
        <div className="depth-2-frame-2">
          <div className="depth-3-frame-03"></div>
        </div>
        <div className="depth-4-frame-12">
          <div className="_12">
            <span>
              <span className="_12-span3">
                <br />
              </span>
              <span className="_12-span4">신천역까지 걸어가기(12분)</span>
            </span>{" "}
          </div>
        </div>
        <div className="depth-4-frame-13">
          <div className="div3">
            <br />
            공고네거리 방향으로 직진{" "}
          </div>
        </div>
        <div className="image-2"></div>
        <div className="depth-2-frame-3">
          <div className="depth-3-frame-02"></div>
        </div>
        <div className="depth-4-frame-14">
          <div className="_12">
            <span>
              <span className="_12-span5">
                <br />
              </span>
              <span className="_12-span6">신천역까지 걸어가기(12분)</span>
            </span>{" "}
          </div>
        </div>
        <div className="depth-4-frame-15">
          <div className="div3">
            <br />
            공고네거리 방향으로 직진{" "}
          </div>
        </div>
        <img
          className="image-removebg-preview-21-2"
          src="image-removebg-preview-21-20.png"
          alt = ""
        />
        <div className="image-3"></div>
        <div className="depth-2-frame-4">
          <div className="depth-3-frame-03"></div>
        </div>
        <div className="depth-4-frame-16">
          <div className="_2-3-2">
            <br />
            문양행 방면 2호선 탑승,
            <br />
            <br />
            수성시장역 하차(3분, 2정거장){" "}
          </div>
        </div>
        <div className="depth-4-frame-17"></div>
        <div className="image-4"></div>
        <div className="image-5"></div>
        <div className="image-6"></div>
        <div className="depth-2-frame-5">
          <div className="depth-3-frame-02"></div>
        </div>
        <div className="depth-4-frame-20">
          <div className="_12">
            <span>
              <span className="_12-span7">
                <br />
              </span>
              <span className="_12-span8">신천역까지 걸어가기(12분)</span>
            </span>{" "}
          </div>
        </div>
        <div className="depth-4-frame-21">
          <div className="div3">
            <br />
            공고네거리 방향으로 직진{" "}
          </div>
        </div>
        <div className="image-7"></div>
        <div className="depth-2-frame-6">
          <div className="depth-3-frame-03"></div>
        </div>
        <div className="depth-4-frame-22">
          <div className="_5">수성시장역 하차 후 5분 걸어가기 </div>
        </div>
        <div className="depth-4-frame-23">
          <div className="_2">
            <br />
            2번 출구에서 수성네거리 방향{" "}
          </div>
        </div>
        <div className="image-8"></div>
        <img className="line-1" src="line-10.svg" alt = ""/>
        <div className="line-2"></div>
        <img className="image-9" src="image-90.png" alt = ""/>
      </div>
      <div className="group-72">
        <img
          className="image-removebg-preview-21-3"
          src="image-removebg-preview-21-30.png"
          alt = ""
        />
        <img
          className="image-removebg-preview-21-4"
          src="image-removebg-preview-21-40.png"
          alt = ""
        />
        <div className="rectangle-1"></div>
      </div>
      <div className="depth-4-frame-1">
        <div className="group-73">
          <div className="div5" onClick={handleGoBack} style={{cursor: "pointer"}}>
            <span>
              <span className="div-5-span">
                <br />
              </span>
              <span className="div-5-span2">뒤로가기</span>
            </span>{" "}
          </div>
        </div>
      </div>
      <div className="depth-3-frame-2">
        <div className="depth-4-frame-0">
          <div className="div6">
            <span>
              <span className="div-6-span">
                <br />
              </span>
              <span onClick={handleNavigateToCall}
                    className="div-6-span2">안내원 도움 요청하기</span>
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Group8;