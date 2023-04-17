import React from 'react'
import MusicList from '../../components/MusicList/MusicList';
import RecipeList from '../../components/RecipeList/RecipeList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ResultPage.css'

export default function ResultPage() {
    return (
      <div className="result-page">
        <RecipeList/>
        <MusicList/>
      </div>
    )
    }