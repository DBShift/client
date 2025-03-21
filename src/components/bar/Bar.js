import React from "react";
import "./Bar.css";

// 랜덤 색상 생성 함수
const generateRandomColor = () => {
    const hue = 120;  // 그린 계열 색상
    const lightness = Math.floor(Math.random() * (60 - 30 + 1)) + 50; //랜덤으로 투명도 바꾸기
    return `hsl(${hue}, 70%, ${lightness}%)`;
};

const Bar = ({ items }) => {
    return (
        <div className="bar-list">
            {items.map((item, index) => {
                // 랜덤 색상 생성
                const randomBorderColor = generateRandomColor();

                return (
                    <div
                        key={index}
                        className="bar-item"
                        style={{ borderLeftColor: randomBorderColor }} // 동적으로 border 색상 적용
                    >
                        <div className="bar-content">
                            <div className="bar-box name">
                                <div>{item.name}</div>
                                <div>{item.description}</div>
                            </div>
                            <div className="bar-box type">
                                {item.type}
                            </div>
                            <div className="bar-box date">
                                <div>{item.date}</div>
                                <div>{item.createdBy}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Bar;
