// Following is used for React Slick CSS (Carousel)
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Routes, Route } from 'react-router-dom';

import "./App.css";
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.Page";
import PlayPage from "./pages/Play.Page";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/Movie/:id' element={<MoviePage />} />
      <Route path='/Plays' element={<PlayPage />} />
    </Routes>
  );
}

export default App;
