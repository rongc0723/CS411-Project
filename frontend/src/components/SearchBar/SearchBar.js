import React, { useState } from 'react';
import './SearchBar.css';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'

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
    <div className="container">
      <form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="eg. Chinese"
          aria-label="Recipe"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        <Button variant='primary' className="search-box" type="submit">Search</Button>
        <div className='search-box'></div>
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
