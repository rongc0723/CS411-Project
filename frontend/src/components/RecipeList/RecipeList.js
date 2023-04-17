import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import FavoriteButton from '../../components/Favorite/Favorite'
import { useEffect } from 'react';
import './RecipeList.css'

const RecipeList = () =>{
  const urlParams = new URLSearchParams(window.location.search);
  const objString = urlParams.get('obj');
  const selectedDish= JSON.parse(objString.slice(4));
  // console.log(selectedDish);

  const query = selectedDish.cuisines[0]
  
  return (
    <div className='RecipeList'>
      <CardGroup>
        <Card style={{ width: '30rem' }}>
          <Card.Img
            variant='top'
            src={selectedDish.image}
            sizes='(max-width: 710px) 120px,(max-width: 991px) 193px,278px'
          ></Card.Img>
          <Card.Body>
            <Card.Title>
              {selectedDish.title}
              <FavoriteButton />
            </Card.Title>
          </Card.Body>
          <Card.Text>Culture: {selectedDish.cuisines[0]}</Card.Text>
          <Accordion>
            {selectedDish.analyzedInstructions[0].steps.map(
              (instructions, index) => (
                <Accordion.Item eventKey={index + 1}>
                  <Accordion.Header>Step {instructions.number}</Accordion.Header>
                  <Accordion.Body>{instructions.step}</Accordion.Body>
                </Accordion.Item>
              )
            )}
          </Accordion>
        </Card>
      </CardGroup>
    </div>
  );
};

const getQuery = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const objString = urlParams.get('obj');
  const selectedDish= JSON.parse(objString.slice(4));
  const query = selectedDish.cuisines[0]
  return query;
}


export default RecipeList;
export {getQuery};
