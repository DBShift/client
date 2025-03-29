import React from "react";
import Button from "../../components/buttons/Button";
import './UserPage.css';
import InputBox from "../../components/input_box/InputBox";
import { getUserTableColumnData, getUserTableData } from "./UsersData";
import Table from "../../components/table/Table";
import { useState } from 'react';
import Modal from "../../components/modal/Modal";
import UserCreatePage from "./UserCreatePage";

function UserPage() {

    const userColumnData = getUserTableColumnData();
    const userData = getUserTableData()


    //유저 생성 모달
    const [isModalOpen, setModalOpen] = useState(false);

    //검색 관련 설정
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const filteredUserData = userData.filter(user =>
        user.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>

           

            <div className="main-content">
                    <div className="search-container">
                        <Button children={"생성"} height={38} onClick={() => setModalOpen(true)}/>
                        <InputBox
                            width={300}
                            height={40}
                            placeholder={"Search by User ID"}
                            icon={'/images/search-icon.png'}
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="split-content">
                        <hr/>
                    </div>
                    <div className="user-container">
                        <Table columns={userColumnData} data={filteredUserData}/>
                    </div>
                    <div className="user-craete-modal">
                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => setModalOpen(false)}
                            children={UserCreatePage()}
                        />
                    </div>
            </div>
        </>
    );
}

export default UserPage;
