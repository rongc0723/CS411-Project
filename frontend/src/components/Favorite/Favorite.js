import React, { useState } from 'react';
import Heart from "react-heart"
import "./Favorite.css"
import { db } from '../../firebase/config';
import { collection, addDoc, query, where, getDocs, deleteDoc } from "firebase/firestore";
import { UserAuth } from '../../context/AuthContext';

function FavoriteButton( {recipeName, steps, image} ) {
  const [active, setActive] = useState(false);
  const {user} = UserAuth();

  const handleClick = async(e) => {
    setActive(!active);
    if (!active){
      await addDoc(collection(db, "favoriteRecipes"), {
        uid: user.uid,
        title: recipeName,
        instructions: steps,
        image: image
      })
    } else {
      const collectionRef = collection(db, 'favoriteRecipes');
      const q = query(collectionRef, where('title', '==', recipeName));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async doc => {
        await deleteDoc(doc.ref);
      });
    }
  }

  return (
    <div style={{ width: "2rem"}}>
      <Heart isActive={active} onClick={handleClick} animationScale={1.25} style={{marginBottom:'1rem'}} />
    </div>
  );
}

export default FavoriteButton;
