// Following is used for React Slick CSS (Carousel)
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import { Routes, Route } from 'react-router-dom';
import axios from 'axios';


import "./App.css";
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.Page";
import PlayPage from "./pages/Play.Page";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
// axios.defaults.params[ "api_key" ] = process.env.REACT_APP_API_KEY;
axios.defaults.params[ "api_key" ] = "676d01af2bddf4debec0a79dea5066eb";

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
