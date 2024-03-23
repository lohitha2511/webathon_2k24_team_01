import React, { useState } from 'react';
import './newRC.css';

function newR () {
  return (
    <>
    <h2 className='rh2'>Add a new Recipe</h2>
    <div className="post-recipe-form">
      <form >
        <div className="form-group">
          <label>Title:</label>
          <input type="text"/>
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" accept="image/*"/>
        </div>
        <div className="form-group">
          <label>Ingredients:</label>
          <textarea  />
        </div>
        <div className="form-group">
          <label>Process:</label>
          <textarea />
        </div>
        <div className="form-group">
          <label>Suggestions:</label>
          <textarea  />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
};

export default newR;
