import React from "react";
import { useNavigate } from "react-router-dom";
import "./Main.css";

export const Main = ({ className, ...props }) => {
    const navigate = useNavigate();

    const handleNavigate = async () => {
        try {
            const response = await fetch('http://localhost:3001/synthesize', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: '도착지 약도 출력 서비스를 시작하겠습니다.' }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const audioBlob = await response.blob();
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audio.play();

            navigate("/voice");
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className={"main " + className}>
            <div className="group-4">
                <div className="group-3">
                    <div className="depth-3-frame-2">
                        <div className="depth-4-frame-0">
                            <div className="div">
                                <span>
                                    <span className="div-span">
                                        <br />
                                    </span>
                                    <span className="div-span2">안내원 도움 요청하기</span>
                                </span>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img
                className="image-removebg-preview-19-2"
                src="image-removebg-preview-19-20.png"
                alt=""
            />
            <div className="div2">
                도착지 약도
                <br />
                출력 서비스를
                <br />
                시작하겠습니다.{" "}
            </div>

            <div className="depth-3-frame-1">
                <br />
                <button onClick={handleNavigate} className="navigate-button">
                    시작하기
                </button>
                <div className="depth-4-frame-12"></div>
            </div>
            <div className="line-5"></div>
        </div>
    );
};

export default Main;