import React from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.css'

export default function MainPage() {
  return (
    <div className="main-page">
      <h1>Welcome to Sfoodify</h1>
      <h3>Search for recipe </h3>
      <SearchBar/>
    </div>
  )
}