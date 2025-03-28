import React from 'react';
import './Checkbox.css';

const Checkbox = ({ label, isChecked, onChange }) => {
    // id는 label을 기반으로 고유하게 만듭니다.
    const id = label.replace(/\s+/g, '-').toLowerCase();

    return (
        <div className="check_wrap">
            <input
                type="checkbox"
                id={id}  // 고유한 id 설정
                checked={isChecked}
                onChange={onChange}
            />
            <label htmlFor={id}>
                <span>{label}</span> {/* 동적으로 label 값 표시 */}
            </label>
        </div>
    );
};

export default Checkbox;
