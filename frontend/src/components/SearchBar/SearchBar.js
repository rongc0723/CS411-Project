import React, { useState } from 'react';

const API_KEY = 'Uj6WDsp+DrugXlQzSWBPFQ==QTr5rhmcz5CqGc40';
const axios = require('axios').default;

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    const options = {
      method: 'get',
      url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
      params: {query},
      headers: {
        'X-RapidAPI-Key': '4aaf0cdf01msh0131c5e263100f2p1c390fjsnadfd05903d78',
        'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
      }
    };
    await axios.request(options).then(function (response) {
      console.log(response.data);
      setRecipes(response.data);
    }).catch(function (error) {
      console.error(error);
  });
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
