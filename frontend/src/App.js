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
import { AuthContextProvider } from './context/AuthContext';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/MainPage" element={<MainPage />} />
            <Route path="/result" element={[<RecipeList/>,<MusicList/>]} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
      </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
