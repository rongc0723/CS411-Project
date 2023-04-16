import React from 'react';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import FavoriteButton from '../../components/Favorite/Favorite'
import { useEffect } from 'react';
import axios from 'axios';
import MusicList from '../MusicList/MusicList';
import {Spotify} from 'react-spotify-embed'

const RecipeList = () =>{
  const urlParams = new URLSearchParams(window.location.search);
  const objString = urlParams.get('obj');
  const selectedDish= JSON.parse(objString.slice(4));
  // console.log(selectedDish);

  const query = selectedDish.cuisines[0]
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async (e) => {
      try {
        const response = await axios.get(`http://localhost:4000/api/spotify?query=${query}`)
        setSongs(response.data.playlists.items);
      } catch (error) {
        console.log(error)
      }
    }
    fetchSongs();
  }, [query])
  
  return (
    <div className='results-page'>
    <Card style={{width: '25rem'}}>
      <Card.Img variant='top' src={selectedDish.image} sizes='(max-width: 710px) 120px,(max-width: 991px) 193px,278px'></Card.Img>
      <Card.Body>
        <Card.Title>
          {selectedDish.title}
          <FavoriteButton/>
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
    {songs.length > 1 && songs.map(song => (
      <Spotify link={song.external_urls.spotify} />
    ))}
  </div>
  )
  
}


export default RecipeList;
