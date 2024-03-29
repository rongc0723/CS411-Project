import { useState, useEffect } from "react";
import './Profile.css'
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const [favorites, setFavorites] = useState([
    "Favorite Item 1",
    "Favorite Item 2",
    "Favorite Item 3"
  ]);

  const {user} = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null){
      navigate('/')
    }
  }, [navigate, user])
  

  const handleRemoveFavorite = (index) => {
    const newFavorites = [...favorites];
    newFavorites.splice(index, 1);
    setFavorites(newFavorites);
  };

  return (
    <div>
      <h1>Welcome to your profile!</h1>
      <h2>Your Favorite List:</h2>
      <ul>
        {favorites.map((item, index) => (
          <li key={index}>
            {item}
            <button className="remove-button" onClick={() => handleRemoveFavorite(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProfilePage;