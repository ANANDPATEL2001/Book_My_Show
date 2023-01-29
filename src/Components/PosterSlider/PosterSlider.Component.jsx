import React from 'react';
import Slider from 'react-slick';
import Poster from '../Poster/Poster.Component'


const PosterSlider = (props) => {
  // Following formate is used in order to avoid the repetitive use of {props.parameter} 
  // Through following we can directly use the provided props as follows
  const { posters, title, subTitle, isDark, config} = props;

  const settings = {
    infinite: false,
    speed : 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    // Following is used for responsive screen
    responsive: [
      {
        // 'Breakpoint' basically refers to screen-width where properties need to aplied
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <div className='flex flex-col items-start sm:ml-3 my-2'>
        <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-black"}`}>{title}</h3>
        <p className={`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>{subTitle}</p>
      </div>
      <Slider {...settings}>
        {posters.map((each, index) =>
        (
          <Poster {...each} isDark={isDark} key={index} />
        ))}
      </Slider>
    </>
  )
};

export default PosterSlider;