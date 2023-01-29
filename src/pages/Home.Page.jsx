import React, { useEffect, useState } from 'react';
import axios from 'axios';


//Layout (HOC)
import DefaultLayoutHoc from '../layouts/Default.layout';

//Components
import EntertainmentCardSlider from '../Components/Entertainment/EntertainmentCard.Component';
import PosterSlider from '../Components/PosterSlider/PosterSlider.Component';
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel.Component';



const HomePage = () => {
    const [recommendedMovies, setRecommdedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

    useEffect(() => {
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get('/movie/popular');
            setRecommdedMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    }, []);
    // This empty bracket above [] shows the initial-value as empty

    useEffect(() => {
        const requestTopratedMovies = async () => {
            const getTopratedMovies = await axios.get('/movie/top_rated');
            setPremierMovies(getTopratedMovies.data.results);
        };
        requestTopratedMovies();
    }, []);

    useEffect(() => {
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get('/movie/upcoming');
            setOnlineStreamEvents(getUpcomingMovies.data.results);
        };
        requestUpcomingMovies();
    }, []);

    return (
        // Following is referred as a 'Fragment' used in React instead of using <div>
        // Following formate is used in order to remove the neccesity of using extra <div> tags
        <>
            <HeroCarousel />
            <div className="container mx-auto px-4 md:px-12 my-8">
                <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>The Best Of Entertainment</h1>
                < EntertainmentCardSlider />
            </div>

            <div className='container mx-auto px-4 md:px-12 my-8'>
                <PosterSlider
                    title='Recommended Movies'
                    subTitle='List of Recommended Movies'
                    posters={recommendedMovies}
                    isDark={false} />
            </div>

            <div className=' bg-opacity-90 bg-slate-900 py-10'>
                <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                    <div className='hidden md:flex'>
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png" className='w-full h-20' alt="Premiere Button" />
                    </div>
                    <div className='container mx-auto px-4 md:px-4 my-8 flex flex-col gap-3'>
                        <PosterSlider
                            title='PREMIERE'
                            subTitle='Brand new release Every Friday'
                            posters={premierMovies}
                            isDark={true} />
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                <PosterSlider
                    title='Online Streaming Events'
                    // Here 'subTitle' has been kept blank,so that in case if we get any error we may handle it
                    subTitle=''
                    posters={onlineStreamEvents}
                    isDark={false} />
            </div>
        </>
    )
}

export default DefaultLayoutHoc(HomePage);