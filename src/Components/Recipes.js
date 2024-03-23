import React from "react";
import './recipeStyles.css';
import { Link } from "react-router-dom";

function Recipes(){
    return (
        <>
            <div className="recContainer">
                <Link to='/recipe' className="link1">
                    <div className="Card">
                        <div className="im150">
                        <img src="https://media.istockphoto.com/id/607983032/photo/butter-chicken-indian-cuisine.jpg?s=612x612&w=0&k=20&c=EDWZiqJkdSyO6rwo7T2pCDmC4ypKbLMqYnRYqjCXd_k=" alt="Recipe Image" />
                        </div>
                        <div class="details">
                            <h2 class="title">Chicken Curry</h2>
                            <p class="calories">Calories: 250</p>                            
                            <p class="description">A mouthwatering recipe that will tantalize your taste buds.</p>
                        </div>
                    </div>
                </Link>

                <Link to='/recipe' className="link1">
                    <div className="Card">
                    <div className="im150">
                        <img src="https://t4.ftcdn.net/jpg/06/38/25/09/360_F_638250982_7oAiuL9tcsQJ7WL5AvNANwtaRQtsVBC2.jpg" alt="Recipe Image" />
                        </div>
                        <div class="details">
                            <h2 class="title">Butter Naan</h2>
                            <p class="calories">Calories: 250</p>                            
                            <p class="description">A mouthwatering recipe that will tantalize your taste buds.</p>
                        </div>
                    </div>
                </Link>

                <Link to='/recipe' className="link1">
                    <div className="Card">
                    <div className="im150">
                        <img src="https://media.istockphoto.com/id/673858790/photo/butter-chicken-curry-with-tender-chicken-breast-cream-butter-honey.jpg?s=612x612&w=0&k=20&c=c_9bYsi6T3vnCz5_iYqdZViX3iPV4r3fL2oTGSps8W8=" alt="Recipe Image" />
                        </div>
                        <div class="details">
                            <h2 class="title">Chicken Makhani</h2>
                            <p class="calories">Calories: 250</p>                            
                            <p class="description">A mouthwatering recipe that will tantalize your taste buds.</p>
                        </div>
                    </div>
                </Link>

                <Link to='/recipe' className="link1">
                    <div className="Card">
                    <div className="im150">
                        <img src="https://media.istockphoto.com/id/1077980738/photo/green-peas-or-matar-paneer-curry-recipe-served-in-a-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=SShuhVPIWBpUaJXqvdWqjPrh0AqsR6VR68GInZlyw6Y=" alt="Recipe Image" />
                        </div>
                        <div class="details">
                            <h2 class="title">Matar Paneer</h2>
                            <p class="calories">Calories: 250</p>                            
                            <p class="description">A mouthwatering recipe that will tantalize your taste buds.</p>
                        </div>
                    </div>
                </Link>

                <Link to='/recipe' className="link1">
                    <div className="Card">
                    <div className="im150">
                        <img src="https://www.funfoodfrolic.com/wp-content/uploads/2023/04/Dal-Makhani-Blog.jpg" alt="Recipe Image" />
                        </div>
                        <div class="details">
                            <h2 class="title">Dal Makhani</h2>
                            <p class="calories">Calories: 250</p>                            
                            <p class="description">A mouthwatering recipe that will tantalize your taste buds.</p>
                        </div>
                    </div>
                </Link>
                
               
            </div>
        
        </>
    );
}

export default Recipes;