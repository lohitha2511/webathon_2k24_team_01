import React from "react";
import "./sidebarStyles.css";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaUserCircle } from 'react-icons/fa';
import { MdGroups2 } from 'react-icons/md';
import { TbFridge } from "react-icons/tb";


function Sidebar(){
        return (
            <div className="sidebar">
                <div className="topEle">
                    <div className="singleElement">
                        <Link to='/' className="link1">
                            <FaHome/>
                            <h3>Home</h3>
                        </Link>
                    </div>
                    <div className="singleElement">
                        <Link to='/search' className="link1">
                            <FaSearch/>
                            <h3>Search</h3>
                        </Link>
                    </div>
                    <div className="singleElement">
                        <Link to='/fridge' className="link1">
                            <TbFridge />
                            <h3>In my Fridge</h3>
                        </Link>
                    </div>
                    <div className="singleElement">
                        <Link to = '/discussions' className="link1">
                            <MdGroups2/>
                            <h3>Discussions</h3>
                        </Link>
                    </div>
                    <div className="singleElement">
                        <Link to = '/user-profile' className="link1">
                            <FaUserCircle/>
                            <h3>User Profile</h3>
                        </Link>
                    </div>
                    
                </div>
            </div>
        );
}

export default Sidebar;