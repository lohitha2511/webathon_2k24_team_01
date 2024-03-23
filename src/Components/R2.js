import React from 'react';
import './r1s.css';

function R2 (recipe){
    return (
        <div className="recipe-card">
            <div className="recipe-header">
                <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                <h2 className="recipe-title">{recipe.title}</h2>
            </div>
            <div className="recipe-content">
                <div className="recipe-section">
                    <h3>Ingredients</h3>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div className="recipe-section">
                    <h3>Steps</h3>
                    <ol>
                        {recipe.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
                <div className="recipe-section">
                    <h3>Tips/Suggestions</h3>
                    <p>{recipe.tips}</p>
                </div>
            </div>
        </div>
    );
};

export default R2;
