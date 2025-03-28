


export const getGroupTableColumnData = () => {
    return [
        { key: "id", label: "식별값" ,},
        { key: "groupName", label: "그룹이름" },
        { key: "groupLeader", label: "그룹장" },
        { key: "createdAt", label: "그룹 생성날짜" },
        { key: "createdBy", label: "만든 사람" },  
        { key: "memberList", label: "그룹원 목록" },  
        { key: "memberCount", label: "인원수" }, 
       
    ]
};

export const getGroupTableData = () => {
    return [
        { id: "Group1_ID", groupName: "Alpha Team", groupLeader: "김철수", createdAt: "2023-03-15", createdBy: "관리자", memberList: truncatePermission(["박영희", "이민호", "최수진"].join(", ")), memberCount: 3 },
        { id: "Group2_ID", groupName: "Beta Squad", groupLeader: "이영수", createdAt: "2022-07-10", createdBy: "홍길동", memberList: truncatePermission(["김영희", "정우성"].join(", ")), memberCount: 2 },
        { id: "Group3_ID", groupName: "Gamma Crew", groupLeader: "박민수", createdAt: "2024-01-20", createdBy: "슈퍼관리자", memberList: truncatePermission(["조민아", "이서준", "강다현", "윤호진"].join(", ")), memberCount: 4 },
        { id: "Group4_ID", groupName: "Delta Force", groupLeader: "윤성호", createdAt: "2021-05-25", createdBy: "최고관리자", memberList: truncatePermission(["강민지", "서지훈", "이유진", "박상혁", "한지원"].join(", ")), memberCount: 5 },
        { id: "Group5_ID", groupName: "Omega League", groupLeader: "최지훈", createdAt: "2020-11-30", createdBy: "시스템", memberList: truncatePermission(["김도현", "배수진"].join(", ")), memberCount: 2 }
    ];
}

const truncatePermission = (permissions) => {
    return permissions.length > 10 ? permissions.substring(0, 10) + '...' : permissions;
}
