import logo from './logo.png';
import './LoginPage.css';
import Button from 'react-bootstrap/Button';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
function LoginPage() {
  const navigate = useNavigate();
  const {user, googleSignIn, logOut} = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error)
    }
  }
  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  const search = () => {
    navigate('/mainpage')
  }


  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <br></br>
      <style>{'body { background-color: #F6F6F6; }'}</style>
      {user ? 
      <div>
        <h1>Welcome, {user.displayName}</h1>
        <Button variant="outline-primary" size="lg" 
        onClick={search}>Search</Button>
        <Button variant="outline-primary" size="lg" 
        onClick={handleSignOut}>Log Out</Button>
      </div> 
      : 
      <Button variant="outline-primary" size="lg" 
      onClick={handleGoogleSignIn}>Login with Google</Button>
      }

    </div>
  );
}

export default LoginPage;
