import React from "react";
import './GroupPage.css';
import Button from "../../components/buttons/Button";
import Table from "../../components/table/Table";
import InputBox from "../../components/input_box/InputBox";
import { useState } from 'react';
import Modal from "../../components/modal/Modal";
import { getGroupTableColumnData, getGroupTableData } from "./GroupData";
import GroupCreatePage from "./GroupCreatePage";


function GroupPage(){

    const groupColumnData = getGroupTableColumnData();
    const groupData = getGroupTableData();


    //유저 생성 모달
        const [isModalOpen, setModalOpen] = useState(false);
    
    //검색 관련 설정
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const filteredUserData = groupData.filter(user =>
        user.id.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return(
        <>
            <div className="main-content">
                    <div className="search-container">
                        <Button children={"생성"} height={38} onClick={() => setModalOpen(true)}/>
                        <InputBox
                            width={300}
                            height={40}
                            placeholder={"Group"}
                            icon={'/images/search-icon.png'}
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="split-content">
                        <hr/>
                    </div>
                    <div className="group-container">
                        <Table columns={groupColumnData} data={filteredUserData}/>
                    </div>
                    <div className="user-craete-modal">
                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => setModalOpen(false)}
                            children={GroupCreatePage()}
                        />
                    </div>
            </div>
        </>
    )
}

export default GroupPage;
