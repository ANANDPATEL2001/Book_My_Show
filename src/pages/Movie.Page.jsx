import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { FaCcVisa, FaCcApplePay } from 'react-icons/fa';


import MovieLayoutHoc from '../layouts/Movie.layout';
import { MovieContext } from '../context/Movie.Context';
import PosterSlider from '../Components/PosterSlider/PosterSlider.Component';

const MoviePage = () => {
  const { id } = useParams();

  const { movie, setMovie } = useContext(MovieContext);

  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendedMovies, setRecommdedMovies] = useState([]);


  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results);
    };
    requestSimilarMovies();
  }, [id]);
  // This [id] above is passed in order to see the results similar to search results i.e. id of the image searched 

  useEffect(() => {
    const requestRecommdedMovies = async () => {
      const getRecommdedMovies = await axios.get(`/movie/${id}/recommendations`);
      setRecommdedMovies(getRecommdedMovies.data.results);
    };
    requestRecommdedMovies();
  }, []);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieData = await axios.get(`/movie/${id}`);
      setMovie(getMovieData.data);
    };
    requestMovie();
  }, [id]);


  const settingCast = {};

  const settings = {};

  return (
    <>
      {/* Movie-Hero Section */}
      <div className='py-12 container px-4 lg:ml-20 lg:w-2/1'>
        <div className='flex flex-col items-start gap-3'>
          <h1 className='text-gray-800 font-bold text-2xl'>About the Movies</h1>
          <p>{movie.overview}</p>
        </div>

        <div className='my-8'>
          <hr />
        </div>

        <div className='my-8'>
          <h2 className='text-gray-800 font-bold text-2xl my-3'>Application Offers</h2>
          <div className='flex flex-col gap-3 lg:flex-row'>
            <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
              <div className='w-8 h-8'>
                <FaCcVisa className='w-full h-full'></FaCcVisa>
              </div>
              <div className='flex flex-col items-start'>
                <h3 className='text-gray-700 text-xl font-bold'>Visa Stream Offer</h3>
                <p className='text-gray-600'>Get 50% Off upto INR 150 on all RuPay card* on BookMyShow Stream.</p>
              </div>
            </div>
            <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
              <div className='w-8 h-8'>
                <FaCcApplePay className='w-full h-full'></FaCcApplePay>
              </div>
              <div className='flex flex-col items-start'>
                <h3 className='text-gray-700 text-xl font-bold'>Film Pass</h3>
                <p className='text-gray-600'>Get 50% Off upto INR 150 on all RuPay card* on BookMyShow Stream.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='my-8'>
        <hr />
      </div>


      {/* Recommendation Movie Sliders */}
      <div className='my-8'>
        <PosterSlider config={settings} title="Recommended Movies" Posters={recommendedMovies} idDark={false} />
      </div>

      {/* <div className='my-8'>
        <hr />
      </div> */}

      {/* <div className='my-8'>
        <PosterSlider config={settings} title="BMS_XCLUSIVE" Posters={recommendedMovies} idDark={false} />
      </div> */}
    </>
  )
};

export default MovieLayoutHoc(MoviePage);