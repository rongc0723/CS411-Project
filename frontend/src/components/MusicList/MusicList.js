import React from 'react'
import { Spotify } from 'react-spotify-embed'
import { getQuery } from '../RecipeList/RecipeList.js'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './MusicList.css'
import Card from 'react-bootstrap/Card'

export default function MusicList() {
  const query = getQuery();
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
    <div className='MusicList'>
    <div className='MusicList'>
      <div>
          {songs.length > 1 && songs.slice(0,2).map(song => (
            <div>
                <Spotify link={song.external_urls.spotify} />
                <br></br>
                <br></br>
                <br></br>
            </div>

          ))}      
      </div>
    </div>
    <div className='MusicList'>
      <div>
          {songs.length > 1 && songs.slice(2,4).map(song => (
            <div>
                <Spotify link={song.external_urls.spotify} />
                <br></br>
                <br></br>
                <br></br>
                </div>
          ))}
      </div>
    </div>      
    </div>

  )
}
