import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MusicList from './components/MusicList/MusicList';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import RecipeList from './components/RecipeList/RecipeList';
import SearchBar from './components/SearchBar/SearchBar'
import LoginPage from './components/Login/LoginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <header className='App-header'>
          <Routes>
            <Route exact path='/' element={<SearchBar/>} />

            <Route exact path='/result'>
              {[<MusicList/>,<RecipeList/>]}
            </Route>

            <Route exact path='/Profile' element={<Profile/>} />
            <Route exact path='/LoginPage' element={<LoginPage/>} />

          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
