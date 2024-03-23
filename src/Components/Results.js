import React from "react";
import SearchBar from "./Search";
import './resu.css';
import Recipes from "./Recipes";

function Results(){
    return(
        <div className="resfake">
            <SearchBar />
            <Recipes />
        </div>
    )
}

export default Results;