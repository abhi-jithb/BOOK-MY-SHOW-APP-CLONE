import './App.css';

//  Slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// routes
import {Routes,Route} from "react-router-dom";
// pages
import PlayPage from './Pages/Play.page';
import MoviePage from './Pages/Movie.page';
import HomePage from './Pages/Home.page';
// layouts
import DefaultLayout from './layout/Default.layout';
import MovieLayout from './layout/Movie.layout';
function App() {
  return (
     <Routes>
        <Route path='/' element={<HomePage/>} />
       <Route path='/movie/:id/' element={<MoviePage/>} />
       <Route path='/plays' element={<PlayPage/>} /> 
       </Routes>
  );
}

export default App();
