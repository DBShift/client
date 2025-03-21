import React from "react";
import "./Table.css"; // CSS 파일 추가

const Table = ({ columns, data }) => {
    return (
        <div className="table-container">
            <table className="table">
                <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={col.key}>{col.label}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((col) => (
                            <td key={col.key}>{row[col.key] ?? "-"}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
