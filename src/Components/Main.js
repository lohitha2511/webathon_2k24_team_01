import React from "react";
import Sidebar from "./Sidebar";
import './mainStyles.css';
import Homepage from "./Homepage";
import { Route, Routes, Link } from "react-router-dom";
import R1 from "./R1";
import NewRecipe from "./newR";
import Discussions from "./Discussions";
import UserProfile from "./UserProf";
import SearchBar from "./Search";
import Results from "./Results";
import RecipeSuggestions from "./Ingre";
import RecipeSelector from "./Ingre";
import R2 from "./R2";

const user = {
    name: 'Ravi Teja',
    profilePic: 'https://via.placeholder.com/150',
    allergens: 'Peanuts, Jam',
    recipes: ['Recipe 1', 'Recipe 2', 'Recipe 3'],
    otherDetails: 'Other details about the user'
};

function Main(){
    return (
        <div className="MainContainer">
            <Sidebar />
            <div className="NonSidebar">
                <Routes>
                    <Route path="/" element={<Homepage/>} />
                    <Route path="/user-profile" element={<UserProfile user={user}/>}/>
                    <Route path="/search" element={<SearchBar/>}/>
                    <Route path="/fridge" element={<RecipeSelector/>}/>
                    <Route path="discussions" element={<Discussions/>}/>
                    <Route path="/new" element={<NewRecipe/>}/>
                    <Route path='/result' element={<Results/>}/>
                    <Route path="/r2" element={<R2 title='Matar Paneer' image='https://media.istockphoto.com/id/1077980738/photo/green-peas-or-matar-paneer-curry-recipe-served-in-a-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=SShuhVPIWBpUaJXqvdWqjPrh0AqsR6VR68GInZlyw6Y=' ingredients = {['Paneer', 'curry powder', 'paprika', 'coconut milk']} steps = {['Heat olive oil in a skillet over medium heat. Sauté onion until lightly browned.', 'Stir in garlic, curry powder, cinnamon, paprika, bay leaf, ginger, sugar, and salt. Continue stirring for 2 minutes', 'Add chicken pieces, tomato paste, yogurt, and coconut milk. Bring to a boil, reduce heat, and simmer for 20 to 25 minutes.']} tips = 'Best when served hot with rice or roti.'/>}/>
                    <Route path="recipe" element={<R1 title='Chicken Curry' image='https://media.istockphoto.com/id/607983032/photo/butter-chicken-indian-cuisine.jpg?s=612x612&w=0&k=20&c=EDWZiqJkdSyO6rwo7T2pCDmC4ypKbLMqYnRYqjCXd_k=' ingredients = {['Chicken', 'curry powder', 'paprika', 'coconut milk']} steps = {['Heat olive oil in a skillet over medium heat. Sauté onion until lightly browned.', 'Stir in garlic, curry powder, cinnamon, paprika, bay leaf, ginger, sugar, and salt. Continue stirring for 2 minutes', 'Add chicken pieces, tomato paste, yogurt, and coconut milk. Bring to a boil, reduce heat, and simmer for 20 to 25 minutes.']} tips = 'Best when served hot with rice or roti.'/>} />
                </Routes>
            </div>
        </div>
    );
}

export default Main;