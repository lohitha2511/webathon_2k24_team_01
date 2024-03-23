import React from "react";
import { Link } from 'react-router-dom';

function Plus(){
    return (
        <div>
            <Link to='/new' className="link1">
                <div className="plusIcon">
                    <h2>+</h2>
                </div>
            </Link>
        </div> 
    );
}

export default Plus;