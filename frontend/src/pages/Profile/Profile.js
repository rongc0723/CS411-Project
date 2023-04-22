import { useState, useEffect } from "react";
import './Profile.css'
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from "react-router-dom";
import { db } from '../../firebase/config';
import { deleteDoc, collection, where, getDocs, query } from "firebase/firestore";
import { Card, CardGroup, Accordion } from 'react-bootstrap';
function ProfilePage() {
  const [favorites, setFavorites] = useState([]);

  const {user} = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null){
      navigate('/')
    } else {
      const getRecipes = async () => {
        try {
          const collectionRef = collection(db, 'favoriteRecipes');
          const q = query(collectionRef, where('uid', '==', user.uid));
          const querySnapshot = await getDocs(q);
          const documents = querySnapshot.docs.map(doc => doc.data());
          console.log(documents)
          setFavorites(documents);
        } catch (error) {
          console.log(error)
        }
      }
      getRecipes();
    }
  }, [navigate, user])

  async function deleteFavorite(title) {
    try {
      const collectionRef = collection(db, 'favoriteRecipes');
      const q = query(collectionRef, where('title', '==', title));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(async doc => {
        await deleteDoc(doc.ref);
      });
      setFavorites(favorites.filter(favorite => favorite.title !== title));
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="profile-page">
      <h1>Welcome to your profile!</h1>
      <h2>Your Favorite List:</h2>
      <div className="favorites">
        { favorites.map( (recipe, index) => (
          <div key={index}>
            <CardGroup>
            <Card style={{ width: '30rem' }}>
              <Card.Img
                variant='top'
                src={recipe.image}
                sizes='(max-width: 710px) 120px,(max-width: 991px) 193px,278px'
                ></Card.Img>
              <Card.Body>
                <Card.Title>
                  {recipe.title}
                  <button onClick={() => deleteFavorite(recipe.title)}>delete</button>
                </Card.Title>
              </Card.Body>
              <Accordion>
                {recipe.instructions.map(
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
        ))}
        </div>
    </div>
  );
}



export default ProfilePage;