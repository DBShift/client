import React from "react";
import "./InputBox.css";

function InputBox({
                      type = "text",
                      placeholder = "입력",
                      value,
                      onChange,
                      width = "100%",
                      height = "40px"
                  }) {
    return (
        <input
            className="input-box"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={{ width, height }}
        />
    );
}


export default InputBox;