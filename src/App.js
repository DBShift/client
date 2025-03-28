import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Button from "./components/buttons/Button";
import InputBox from "./components/input_box/InputBox";
import SideBar from "./components/side_bar/SideBar";
import Table from "./components/table/Table";
import Bar from "./components/bar/Bar";
import UserPage from "./pages/user/UserPage";

function App() {
    const [inputValue, setInputValue] = useState("");

    //사이드바 메뉴들
    const sidebarMenuItems = [
        { label: 'User', link: '/user', icon: '/images/user-icon.png' },
        { label: 'Group', link: '/group', icon: '/images/group-icon.png' },
        { label: 'Import', link: '/import', icon: '/images/import-icon.png' },
        { label: 'Data Center', link: '/data-center', icon: '/images/data-center-icon.png' },
        { label: 'Export', link: '/export', icon: '/images/export-icon.png' },
        { label: 'Connect', link: '/connect', icon: '/images/connect-icon.png' }
    ];

    const columns = [
        { key: "id", label: "전화번호" },
        { key: "name", label: "이름" },
        { key: "age", label: "나이" },
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
        { key: "city", label: "컬럼" }, // 데이터에 없는 필드 추가 테스트
    ];

    const data = [
        { id: 1, name: "홍길동", age: 25, city: "서울" },
        { id: 2, name: "김철수", age: 30 }, // city 없음
        { id: 2, name: "김철수", age: 30 }, // city 없음
        { id: 2, name: "김철수", age: 30 }, // city 없음
        { id: 2, name: "김철수", age: 30 }, // city 없음
        { id: 2, name: "김철수", age: 30 }, // city 없음
        { id: 2, name: "김철수", age: 30 }, // city 없음
        { id: 2, name: "김철수", age: 30 }, // city 없음
        { id: 2, name: "김철수", age: 30 }, // city 없음
        { id: 2, name: "김철수", age: 30 }, // city 없음
        { id: 2, name: "김철수", age: 30 }, // city 없음
        { id: 2, name: "김철수", age: 30 }, // city 없음
        { id: 2, name: "김철수", age: 30 }, // city 없음
        { id: 2, name: "김철수", age: 30 }, // city 없음
        { id: 2, name: "김철수", age: 30 }, // city 없음
        { id: 2, name: "김철수", age: 30 }, // city 없음
    ];

    const sampleBarItems = [
        { name: "파일 A", type: "문서", date: "2024-03-21", description: "문서 파일 A", createdBy: "홍길동" },
        { name: "파일 B", type: "이미지", date: "2024-03-20", description: "이미지 파일 B", createdBy: "김철수" },
        { name: "파일 C", type: "동영상", date: "2024-03-19", description: "동영상 파일 C", createdBy: "이영희" },
        { name: "파일 D", type: "문서", date: "2024-03-18", description: "문서 파일 D", createdBy: "박지민" },
        { name: "파일 E", type: "이미지", date: "2024-03-17", description: "이미지 파일 E", createdBy: "최은지" },
        { name: "파일 F", type: "동영상", date: "2024-03-16", description: "동영상 파일 F", createdBy: "한지호" },
        { name: "파일 G", type: "문서", date: "2024-03-15", description: "문서 파일 G", createdBy: "정다희" },
        { name: "파일 H", type: "이미지", date: "2024-03-14", description: "이미지 파일 H", createdBy: "박상훈" },
        { name: "파일 I", type: "동영상", date: "2024-03-13", description: "동영상 파일 I", createdBy: "김민수" },
        { name: "파일 J", type: "문서", date: "2024-03-12", description: "문서 파일 J", createdBy: "이준호" },
        { name: "파일 K", type: "이미지", date: "2024-03-11", description: "이미지 파일 K", createdBy: "강서연" },
        { name: "파일 L", type: "동영상", date: "2024-03-10", description: "동영상 파일 L", createdBy: "배준호" },
        { name: "파일 M", type: "문서", date: "2024-03-09", description: "문서 파일 M", createdBy: "오서우" },
    ];


    return (
        <Router>
            <div className="App">
                {/* 사이드바 예제 실제로는 함수로 분리해서 사용해주기 바람 */}
                <SideBar menuItems={sidebarMenuItems}/>

                {/*<div className="main-content">*/}
                {/*    /!* 버튼 사용 예제 실제로는 함수로 분리해서 사용해주기 바람 *!/*/}
                {/*    <Button variant="primary" onClick={() => alert("버튼 클릭!")}>*/}
                {/*        기본 버튼*/}
                {/*    </Button>*/}

                {/*    /!* 입풋 박스 예제 실제로는 함수로 분리해서 사용해주기 바람 *!/*/}
                {/*    <InputBox*/}
                {/*        value={inputValue}*/}
                {/*        onChange={(e) => setInputValue(e.target.value)}*/}
                {/*        placeholder="이름을 입력하세요"*/}
                {/*        width="300px"*/}
                {/*        height="20px"*/}
                {/*    />*/}

                {/*    <Table*/}
                {/*    data={data}*/}
                {/*    columns={columns}>*/}
                {/*    </Table>*/}


                {/*    <Bar items={sampleBarItems} />*/}
                {/*</div>*/}

            </div>
            <Routes>
                {/*<Route exact path="/" component={HomePage} />*/}
                <Route path="/user" element={<UserPage sidebarMenuItems={sidebarMenuItems}/>} />
                {/*<Route component={NotFoundPage} />  /!* 모든 경로가 매칭되지 않으면 이 컴포넌트를 렌더링 *!/*/}
            </Routes>
        </Router>

    );
}

export default App;
