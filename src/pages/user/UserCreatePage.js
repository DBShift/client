import Button from "../../components/buttons/Button";
import InputBox from "../../components/input_box/InputBox";
import "./UserCreatePage.css"
import React, { useState } from 'react';
import Checkbox from "../../components/checkbox/CheckBox";
import {getPermissionOptions} from "./UsersData";

const UserCreatePage = () => {
    const permissionOptions = getPermissionOptions();
    const [permissions, setPermissions] = useState({
        generateUser: false,
        editorUser: false,
        generateGroup: false,
    });


    // 권한 상태를 토글하는 함수
    const handleCheckboxChange = (permission) => {
        setPermissions((prev) => ({
            ...prev,
            [permission]: !prev[permission],  // 해당 권한 상태 반전
        }));
    };

    return (
        <div>
            <div className="user-create-title-container">
                <h2>Create User</h2>
            </div>

            <div className="user-info-container">


                <div className="user-id-name-container">
                    <InputBox placeholder={"UserID"} height={50}/>
                    <InputBox placeholder={"Username"} height={50}/>
                </div>

                <div className="user-code-container">
                    <div className="input-with-button">
                        <small className="generate-btn">Generate</small>
                        <InputBox height={50} placeholder={"Generate New User Code"}/>
                    </div>

                    <InputBox height={50} placeholder={"Confirm User Code"}/>
                </div>

                <div className="user-permission-container">
                    {permissionOptions.map(({key, label}) => (
                        <Checkbox
                            key={key}
                            label={label}
                            isChecked={permissions[key]}
                            onChange={() => handleCheckboxChange(key)}
                        />
                    ))}
                </div>

                <div className="user-submit-button-container">
                    <Button children="생성하기"/>
                </div>
            </div>
        </div>
    );
};

export default UserCreatePage;