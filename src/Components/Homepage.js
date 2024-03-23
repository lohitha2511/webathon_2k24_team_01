import React from "react";
import Recipes from "./Recipes";
import Filter from "./Filter";

function Homepage(){
    return (
        <div>
            <div className="filterFull">
                <Filter/>
            </div>
            <Recipes/>
        </div>
    );
}

export default Homepage;