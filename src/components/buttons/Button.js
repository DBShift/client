import React from "react";
import "./Button.css";


// children → 버튼 안에 들어갈 내용 (텍스트, 아이콘 등)
//
// onClick → 클릭 이벤트
//
// type → 기본 button, 필요하면 submit 변경 가능
//
// variant → 버튼 스타일 (ex. primary, secondary, danger 등)

function Button({ children, onClick, type = "button", variant = "primary", width, height }) {
    return (
        <button
            className={`btn btn-${variant}`}
            onClick={onClick}
            type={type}
            style={{ width: width || 'auto', height: height || 'auto' }} // 기본값을 auto로 설정
        >
            {children}
        </button>
    );
}


export default Button;

