import React, { useState } from 'react'
import axios from 'axios'
// // Layout Hoc
import DefaultLayoutHoc from '../layout/Default.layout';

// Components
import HeroCarousel from '../Components/HeroCarousel/HeroCarousel.Component';
import EntertainmentCardSlider from '../Components/Entertainment/EntertainmentCardComponent';
// import HeroCarousel from '../Components/HeroCarousel/HeroCarousel.Component';
import PosterSlider from '../Components/PosterSlider/PosterSlider.Component';


const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setPremierMovies] = useState([]);
    const [onlineStreamingEvents, setOnlineStreamingEvents] = useState([]);
  return <>

    <HeroCarousel />

    <div className='container mx-auto px-4 md:px-12 my-8'>
     <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>
      The Best of Entertainment
      </h1>

     <EntertainmentCardSlider />
    </div>

    <div className='container mx-auto px-4 md:px-12 my-8 '>
      <PosterSlider 
       title="Recommended Movies"
       subtitle="List of recommended movies"
       posters={recommendedMovies}
       isDark={false}
      />
    </div>

    <div className='bg-premier-800 py-12'>
      <div className='container mx-auto px-4 my-8 flex-col gap-3'>
        <div className='hidden md:flex'>
          <img src="" 
          alt="Rupay" 
          className='w-full h-full' />
        </div>
        <PosterSlider 
        title="Premium"
        subtitle="Brand new Every friday"
        posters={premierMovies}
        isDark={true}
        />
      </div>
    </div>

    <div container mx-auto px-4 my-8 gap-3>
    <PosterSlider
        title="Online Streaming"
        subtitle="Online Streaming bests of the week"
        posters={onlineStreamingEvents}
        isDark={false}
        />
    </div>
    </>;

}

export default DefaultLayoutHoc(HomePage);