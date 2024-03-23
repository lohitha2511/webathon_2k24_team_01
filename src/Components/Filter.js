import React from "react";
import './filterStyles.css';

function Filter(){
    return (
        <>
            <div className="filterMain">
                <h2>Lets Cook Something!</h2>
                <div>
                    <label for="foodtypes">Filter recipes:  </label> 
                    <select name="foodtypes" id="foodtypes"> 
                        <option value="v0">All</option> 
                        <option value="v1">Vegetarian</option> 
                        <option value="v2">Meat</option> 
                        <option value="v3">Healthy</option> 
                        <option value="v4">Sweet</option> 
                    </select>
                </div>
            </div>
        </>
    );
}

export default Filter;