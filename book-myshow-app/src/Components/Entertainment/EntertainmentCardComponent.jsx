import React from 'react'
import Slider from 'react-slick'

const EntertainmentCard = (props) => {
  return <>
  <div>
    <img 
    className='w-full h-full rounded-lg' 
    src={props.src} 
    alt='Enertainment' />
  </div>
  </>
}
const EntertainmentCardSlider = () =>{
  const EntertainmentImage=[
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00378434-sjuvpxvrhj-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00347867-wrhkfngbyn-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00363275-xfqqlpgafa-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00313350-wckjamhksm-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00377441-sdpkgffzgm-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00358212-cpmksptacn-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00329481-lejmnfxjfe-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/et00338200-qufdtbyewy-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00076943-utvhrbahya-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00088634-dzexleuuue-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00375311-gxglttykmg-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@tv_series_v1.png,t-false,lfo-bottom_left,l-end/et00359044-gyjfdplcfu-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-1920:w-600/spider-man-collection-202202040328.png",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00347810-kvvwcmvupg-portrait.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122511-ujjkqajhyw-portrait.jpg",
  ];


  const settings = {
    infinite: false,
    autoplay:false,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive:[
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ]
  };


  return(
    <>
     <Slider {...settings}>
      {EntertainmentImage.map((image)=><EntertainmentCard src={image} />)}
      </Slider>
    </>
  )
  
}

export default EntertainmentCardSlider