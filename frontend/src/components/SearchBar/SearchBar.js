import React, { useState } from 'react';
import './SearchBar.css';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import CardGroup from 'react-bootstrap/CardGroup'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const API_KEY = '2f0beac2f4c1420c816e7632d8657317';
const fetch = require('node-fetch');

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

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

  const handleOnclick = (keyId) => {
    navigate(`/result?key=${keyId}`);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">》</InputGroup.Text>
        <Form.Control
          placeholder="eg. Chinese"
          aria-label="Recipe"
          aria-describedby="basic-addon1"
          value={query} 
          onChange={handleChange} 
        />
      </InputGroup>
        <Button variant='primary' className="search-box" type="submit">Search</Button>
        <div className='search-box'></div>
      </form>
      <br></br>
      <div>
      <CardGroup>
      <Card style={{width: '28rem'}}>
        <ListGroup variant='flush'>
          {recipes.slice(0,5).map(recipe => (
            <ListGroup.Item key={recipe.id} className='search-result' onClick={() => handleOnclick(recipe.id)}>{recipe.title}</ListGroup.Item>
          ))}          
        </ListGroup>
      </Card>  
      <Card style={{width: '28rem'}}>
        <ListGroup variant='flush'>
          {recipes.slice(5).map(recipe => (
            <ListGroup.Item key={recipe.id} className='search-result' onClick={() => handleOnclick(recipe.id)}>{recipe.title}</ListGroup.Item>
          ))}          
        </ListGroup>        
      </Card>        
      </CardGroup>
       
      </div>

    </div>
  );
};

export default SearchBar;
