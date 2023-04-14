import React, { useState } from 'react';
import './SearchBar.css';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import CardGroup from 'react-bootstrap/CardGroup'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const SearchBar = () => {
  
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.get(`http://localhost:4000/api/recipes?query=${query}`)
      setRecipes(response.data.results)
    }catch (error) {
      console.log(error) 
    }
  }

  const handleOnclick = (keyId) => {
    const userSelect = recipes.find(item => item.id === keyId);
    const urlParams = new URLSearchParams();
    urlParams.append('obj', JSON.stringify(userSelect));
    navigate(`/result?obj=${urlParams}`);
  }


  return (
    <div className="container">
      <form onSubmit={(e) => searchRecipes(e)}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">》</InputGroup.Text>
          <Form.Control
            placeholder="eg. Chinese"
            aria-label="Recipe"
            aria-describedby="basic-addon1"
            value={query} 
            onChange={(e) => setQuery(e.target.value)} 
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
