import React, { useEffect, useState } from 'react'
import MovieLayoutHoc from '../layout/Movie.layout'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const MoviePage = () => {
   const {id} = useParams();

   const [cast, setCast] = useState();


   useEffect(()=>{
    const requestCast = async() => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
   }, []);

   
return (
<div className='bg-black text-darkBackground-50'>MoviePage
  <h2 className='bg-white'>hello gys</h2>
</div>

    )
}

export default MovieLayoutHoc(MoviePage)