import './App.css';

// Routers
import {Routes, Route} from "react-router-dom";

// React Slick CSS
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Pages
import PlayPage from './Pages/Play.page';
import MoviePage from './Pages/Movie.page';
import HomePage from './Pages/Home.page';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
