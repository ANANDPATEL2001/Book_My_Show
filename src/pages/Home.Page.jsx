import React, { useState } from 'react';

//Layout (HOC)
import DefaultLayoutHoc from '../layouts/Default.layout';

//Components
import EntertainmentCard from '../Components/Entertainment/EntertainmentCard.Component';
import HeroCarousel from '../Components/HeroCarousel/HeroCarouselComponent';
import PosterSlider from '../Components/PosterSlider/PosterSlider.Component';


const HomePage = () => {
    const [recomendedMovies, setRecomdedMovies] = useState([]);
    const [premiumMovies, setPremiumMovies] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

    return (
        // Following is referred as a 'Fragment' used in React instead of using <div>
        // Following formate is used in order to remove the neccesity of using extra <div> tags
        <>HomePage</>
    )
}

export default DefaultLayoutHoc(HomePage);