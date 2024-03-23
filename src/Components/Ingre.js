import React, { useState } from 'react';
import './ing.css';
import { Link } from 'react-router-dom';

const RecipeSelector = () => {
  const recipes = [
    {
      id: 1,
      name: 'Chicken Curry',
      ingredients: ['chicken', 'spices', 'tomatoes', 'black pepper', 'chillies']
    },
    {
      id: 2,
      name: 'Butter Naan',
      ingredients: ['flour', 'butter']
    },
    {
      id: 3,
      name: 'Dal Makhani',
      ingredients: ['urad dal', 'spices', 'tomatoes', 'chillies']
    }
    ,
    {
      id: 4,
      name: 'Matar Paneer',
      ingredients: ['paneer', 'spices', 'tomatoes', 'peas']
    }
    ,
    {
      id: 5,
      name: 'Chicken Makhani',
      ingredients: ['chicken', 'spices', 'tomatoes', 'chillies']
    }
  ];

  const ingredients = ['tomatoes', 'eggs', 'chicken', 'spices', 'peas', 'chillies', 'paneer', 'flour', 'urad dal', 'butter'];

  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [suggestedRecipes, setSuggestedRecipes] = useState([]);

  const handleIngredientToggle = (ingredient) => {
    const isSelected = selectedIngredients.includes(ingredient);
    if (isSelected) {
      setSelectedIngredients(selectedIngredients.filter(item => item !== ingredient));
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const handleSearch = () => {
    const suggestedRecipes = recipes.filter(recipe =>
      selectedIngredients.every(ingredient => recipe.ingredients.includes(ingredient))
    );
    setSuggestedRecipes(suggestedRecipes);
  };

  return (
    <div className="recipe-selector">
      <h2>Select Ingredients</h2>
      <div className="ingredient-list">
        {ingredients.map((ingredient, index) => (
          <button
            key={index}
            className={selectedIngredients.includes(ingredient) ? 'selected' : ''}
            onClick={() => handleIngredientToggle(ingredient)}
          >
            {ingredient}
          </button>
        ))}
      </div>
      <button onClick={handleSearch}>Search</button>
      <div className="suggested-recipes">
        <h2>Suggested Recipes</h2>
        {suggestedRecipes.length > 0 ? (
          <ul>
            {suggestedRecipes.map(recipe => (
              <Link to='/r2' className='link1'><li className='listItem' key={recipe.id}>{recipe.name}</li></Link>
            ))}
          </ul>
        ) : (
          <p>No recipes found based on selected ingredients.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeSelector;
