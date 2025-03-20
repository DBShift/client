import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Button from "./components/buttons/Button";
import InputBox from "./components/input_box/InputBox";
import SideBar from "./components/side_bar/SideBar";

function App() {
    const [inputValue, setInputValue] = useState("");

    //사이드바 메뉴들
    const sidebarMenuItems = [
        { label: 'User', link: '#', icon: '/images/user-icon.png' },
        { label: 'Group', link: '#', icon: '/images/group-icon.png' },
        { label: 'Import', link: '#', icon: '/images/import-icon.png' },
        { label: 'Data Center', link: '#', icon: '/images/data-center-icon.png' },
        { label: 'Export', link: '#', icon: '/images/export-icon.png' },
        { label: 'Connect', link: '#', icon: '/images/connect-icon.png' }
    ];

    return (
        <Router>
            <div className="App">
                {/* 사이드바 예제 실제로는 함수로 분리해서 사용해주기 바람 */}
                <SideBar menuItems={sidebarMenuItems}/>
                <div className="main-content">
                    {/* 버튼 사용 예제 실제로는 함수로 분리해서 사용해주기 바람 */}
                    <Button variant="primary" onClick={() => alert("버튼 클릭!")}>
                        기본 버튼
                    </Button>

                    {/* 입풋 박스 예제 실제로는 함수로 분리해서 사용해주기 바람 */}
                    <InputBox
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="이름을 입력하세요"
                        width="300px"
                        height="20px"
                    />
                </div>
            </div>
        </Router>

    );
}

export default App;
