import React from "react";
import SideBar from "../../components/side_bar/SideBar";
import Button from "../../components/buttons/Button";
import './UserPage.css';
import InputBox from "../../components/input_box/InputBox";
import { getUserTableColumnData, getUserTableData } from "./UsersData";
import Table from "../../components/table/Table";
import { useState } from 'react';

function UserPage({ sidebarMenuItems }) {

    const userColumnData = getUserTableColumnData();
    const userData = getUserTableData()

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredUserData = userData.filter(user =>
        user.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <SideBar menuItems={sidebarMenuItems}/>

            <div className="main-content">
                <div className="search-container">
                    <Button children={"생성"} height={38}/>
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
                    <Table columns={userColumnData} data={filteredUserData} />
                </div>
            </div>
        </>
    );
}

export default UserPage;
