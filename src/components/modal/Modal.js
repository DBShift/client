import React, { useEffect } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        //ESC 에 따라서 처리
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>✖</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
