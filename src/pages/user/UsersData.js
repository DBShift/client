

export const getUserTableColumnData = () => {
    return [
        { key: "id", label: "아이디" ,},
        { key: "name", label: "이름" },
        { key: "createdAt", label: "생성 날짜" },
        { key: "createdBy", label: "만든 사람" },  // 만든 사람
        { key: "userGroup", label: "가입된 그룹" },  // 가입된 그룹
        { key: "permissions", label: "권한 목록" },  // 권한 목록
        { key: "-", label: "업데이트" },  // 권한 목록
    ]
};

export const getUserTableData = () => {
    return [
        { id: "User1_ID", name: "홍길동", createdAt: "2022-01-01", createdBy: "관리자", userGroup: "A Group", permissions: truncatePermission("유저 관리, 그룹 관리" ,"커넥트 관리") },
        { id: "User2_ID", name: "김철수", createdAt: "2023-03-15", createdBy: "관리자", userGroup: "B Group", permissions: truncatePermission("유저 관리, 그룹 관리") },
        { id: "User3_ID", name: "박영희", createdAt: "2021-07-23", createdBy: "관리자", userGroup: "C Group", permissions: truncatePermission("유저 관리, 그룹 관리") },
        { id: "User4_ID", name: "이민수", createdAt: "2022-05-10", createdBy: "관리자", userGroup: "D Group", permissions: truncatePermission("유저 관리, 그룹 관리") },
        { id: "User5_ID", name: "최지훈", createdAt: "2020-12-04", createdBy: "관리자", userGroup: "A Group", permissions: truncatePermission("유저 관리, 그룹 관리") },
        { id: "User6_ID", name: "정은지", createdAt: "2023-02-18", createdBy: "관리자", userGroup: "B Group", permissions: truncatePermission("유저 관리, 그룹 관리") },
    ]
}

const truncatePermission = (permissions) => {
    return permissions.length > 10 ? permissions.substring(0, 10) + '...' : permissions;
}