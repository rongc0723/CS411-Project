import logo from "./logo.png";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MusicList from './components/MusicList/MusicList';
import Navbar from './components/Navbar/Navbar';
import Profile from './pages/Profile/Profile';
import RecipeList from './components/RecipeList/RecipeList';
import LoginPage from './pages/Login/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <style>{'body { background-color: #F6F6F6; }'}</style>
        <button className="btn">Login With Google</button>
          <Routes>
            <Route exact path='/LoginPage' element={<LoginPage/>} />
            <Route exact path='/' element={<MainPage/>} />

            <Route exact path='/result' element={[<MusicList/>,<RecipeList/>]}/>

            <Route exact path='/Profile' element={<Profile/>} />
            

          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
