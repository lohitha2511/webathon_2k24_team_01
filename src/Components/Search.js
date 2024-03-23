import React from 'react';
import './searchCss.css';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  return (
    <form className="search-form" >
      <input
        type="text"
        name="search"
        className="search-input"
        placeholder="Search dishes..."
      />
      <Link to='/result' className='link1'>
        <button type="submit" className="search-button">
            <FaSearch/>
        </button>
      </Link>
    </form>
  );
};

export default SearchBar;
