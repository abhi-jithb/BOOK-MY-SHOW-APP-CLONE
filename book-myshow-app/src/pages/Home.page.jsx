import React, { useState } from 'react'

// Layout Hoc
import DefaultLayoutHoc from '../layout/Default.layout'

// Components
import EntertainmentCardComponent from '../Components/Entertainment/EntertainmentCardComponent';
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../Components/PosterSlider/PosterSlider.Component';


const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premiereMovies, setPremiereMovies] = useState([]);
    const [onlineStreamingEvents, setOnlineStreamingEvents] = useState([]);
  return <>
    <HeroCarousel />
    <div className='container mx-auto px-4 md:px-12 my-8'>
     <h1 >Recommended Movies</h1>

    </div>
    </>;
  
}

export default DefaultLayoutHoc(HomePage)