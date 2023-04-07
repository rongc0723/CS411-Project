import React from 'react';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

const RecipeList = () =>{
  const urlParams = new URLSearchParams(window.location.search);
  const objString = urlParams.get('obj');
  const selectedDish= JSON.parse(objString.slice(4));
  console.log(selectedDish);

  return (
    <Card style={{width: '25rem'}}>
      <Card.Img variant='top' src={selectedDish.image} sizes='(max-width: 710px) 120px,(max-width: 991px) 193px,278px'></Card.Img>
      <Card.Body>
        <Card.Title>
          {selectedDish.title}
        </Card.Title>
      </Card.Body>
      <Card.Text>
        Culture: {selectedDish.cuisines[0]}.
      </Card.Text>
      <Accordion>
        {selectedDish.analyzedInstructions[0].steps.map(instructions => (
          <Accordion.Item>
            <Accordion.Header>
              Step {instructions.number}
            </Accordion.Header>
            <Accordion.Body>
              {instructions.step}
            </Accordion.Body>
          </Accordion.Item>))}
      </Accordion>
    </Card>
  )
}


export default RecipeList;
