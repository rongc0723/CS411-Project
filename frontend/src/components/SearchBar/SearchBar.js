import React, { useState } from 'react';
import './SearchBar.css';

const API_KEY = '2f0beac2f4c1420c816e7632d8657317';
const fetch = require('node-fetch');

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    await fetch(`https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${query}`)
    .then(response=>response.json())
    .then(data=>{
      console.log(data);
      setRecipes(data.results);
    })
    
    
  }

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} placeholder="Search for a recipe" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>{recipe.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
