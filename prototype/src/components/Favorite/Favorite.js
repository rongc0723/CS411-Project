import React, { useState } from 'react';
import Heart from "react-heart"
import "./Favorite.css"

function FavoriteButton() {
    const [active, setActive] = useState(false)
    return (
        <div style={{ width: "2rem"}}>
          <Heart isActive={active} onClick={() => setActive(!active)} animationScale = {1.25} style = {{marginBottom:'1rem'}} />
        </div>
    );
  }

export default FavoriteButton;
