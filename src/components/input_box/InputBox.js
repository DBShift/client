import React from "react";
import "./InputBox.css";

function InputBox({
                      type = "text",
                      placeholder = "입력",
                      value,
                      onChange,
                      width = "100%",
                      height = "40px",
                      icon, // 아이콘 URL 또는 컴포넌트를 받을 수 있음
                  }) {
    return (
        <div
            className="input-box-container"
            style={{ width, height, position: "relative" }}
        >
            <input
                className="input-box"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{ width: "100%", height: "100%", paddingRight: icon ? "40px" : "10px" }}
            />
            {icon && (
                <div className="input-box-icon">
                    {typeof icon === "string" ? (
                        <img src={icon} alt="icon" />
                    ) : (
                        icon
                    )}
                </div>
            )}
        </div>
    );
}

export default InputBox;
