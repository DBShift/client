import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SideBar.css';

function SideBar({ menuItems }) {
    const [isClosed, setIsClosed] = useState(false);

    const toggleSidebar = () => {
        setIsClosed(!isClosed);
    };

    return (
        <div className={`sidebar ${isClosed ? 'closed' : ''}`}>
            <h2 className={'sidebar-title'}>Category</h2>
            <hr className={'sidebar-underline'}/>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} className="menu-item">
                        <NavLink
                            to={item.link}
                            className={({isActive}) => isActive ? 'menu-link active' : 'menu-link'}
                        >

                        <span className="menu-icon">
                            <img src={item.icon} alt={item.label}/>
                        </span>

                        <div className="menu-label">{item.label}</div>

                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SideBar;
