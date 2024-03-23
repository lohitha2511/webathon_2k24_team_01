import React from 'react';
import './userStyles.css';

const UserProfile = ({ user }) => {
    return (
        <div className="user-profile">
            <div className="user-header">
                <img src={user.profilePic} alt={user.name} className="profile-pic" />
                <h2 className="user-name">Welcome, {user.name}!</h2>
            </div>
            <div className="user-details">
                <h3>Allergen Information</h3>
                <p>{user.allergens}</p>
            </div>
            <div className="user-details">
                <h3>Your Recipes:</h3>
                <ul>
                    {user.recipes.map((recipe, index) => (
                        <li key={index}>{recipe}</li>
                    ))}
                </ul>
            </div>
            <div className="user-other-details">
                <h3>Other Details</h3>
                <p>{user.otherDetails}</p>
            </div>
        </div>
    );
};

export default UserProfile;