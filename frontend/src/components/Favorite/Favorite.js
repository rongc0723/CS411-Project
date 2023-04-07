import React, { useState } from 'react';
import Heart from "react-heart"
import "./Favorite.css"

function FavoriteButton(props) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    if (props.onAddFavorite) {
      props.onAddFavorite(props.recipeName); 
    }
  }

  return (
    <div style={{ width: "2rem"}}>
      <Heart isActive={active} onClick={handleClick} animationScale={1.25} style={{marginBottom:'1rem'}} />
    </div>
  );
}

export default FavoriteButton;
