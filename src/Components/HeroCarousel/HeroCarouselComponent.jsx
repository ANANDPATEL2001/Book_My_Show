import React, { useState } from 'react';
import HeroSlider from 'react-slick';
import { NextArrow, PrevArrow } from './Arrows.Component';

const HeroCarousel = () => {
  const [images, setImages] = useState([
    {
      "adult": false,
      "backdrop_path": "/gwRMwljwHoNCyyJVgMA2XC4qPUU.jpg",
      "genre_ids": [
        18,
        35
      ],
      "id": 615777,
      "original_language": "en",
      "original_title": "Babylon",
      "overview": "A tale of outsized ambition and outrageous excess, tracing the rise and fall of multiple characters in an era of unbridled decadence and depravity during Hollywood's transition from silent films and to sound films in the late 1920s.",
      "popularity": 311.031,
      "poster_path": "/wjOHjWCUE0YzDiEzKv8AfqHj3ir.jpg",
      "release_date": "2022-12-22",
      "title": "Babylon",
      "video": false,
      "vote_average": 7.8,
      "vote_count": 435
    },
    {
      "adult": false,
      "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
      "genre_ids": [
        14,
        28,
        878
      ],
      "id": 436270,
      "original_language": "en",
      "original_title": "Black Adam",
      "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      "popularity": 1253.485,
      "poster_path": "/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
      "release_date": "2022-10-19",
      "title": "Black Adam",
      "video": false,
      "vote_average": 7.2,
      "vote_count": 3913
    },
    {
      "adult": false,
      "backdrop_path": "/yYrvN5WFeGYjJnRzhY0QXuo4Isw.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 505642,
      "original_language": "en",
      "original_title": "Black Panther: Wakanda Forever",
      "overview": "Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
      "popularity": 1166.462,
      "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
      "release_date": "2022-11-09",
      "title": "Black Panther: Wakanda Forever",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 1731
    },
    {
      "adult": false,
      "backdrop_path": "/rodjjIJ8oh9nuBp86PhojcYHTEN.jpg",
      "genre_ids": [
        28,
        9648,
        53,
        80,
        18
      ],
      "id": 740952,
      "original_language": "en",
      "original_title": "Savage Salvation",
      "overview": "Newly engaged Shelby John and Ruby Red want a fresh start after their struggles with addiction, but when Shelby discovers his beloved Ruby dead on their porch, he embarks on a vengeful killing spree of the dealers who supplied her. Armed with nothing but adrenaline and a nail gun, Shelby begins to unleash chaos on the town’s criminal underbelly, as he hunt’s down crime lord Coyote. Sheriff Church must race against the clock to put an end to Shelby's vigilante justice before the entire town descends into a bloodbath.",
      "popularity": 1064.189,
      "poster_path": "/fJRt3mmZEvf8gQzoNLzjPtWpc9o.jpg",
      "release_date": "2022-12-02",
      "title": "Savage Salvation",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 77
    },
    {
      "adult": false,
      "backdrop_path": "/8I37NtDffNV7AZlDa7uDvvqhovU.jpg",
      "genre_ids": [
        28,
        12,
        14,
        878
      ],
      "id": 19995,
      "original_language": "en",
      "original_title": "Avatar",
      "overview": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
      "popularity": 1160.459,
      "poster_path": "/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg",
      "release_date": "2009-12-15",
      "title": "Avatar",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 28057
    },
    {
      "adult": false,
      "backdrop_path": "/dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg",
      "genre_ids": [
        35,
        80,
        9648
      ],
      "id": 661374,
      "original_language": "en",
      "original_title": "Glass Onion: A Knives Out Mystery",
      "overview": "World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery surrounding a tech billionaire and his eclectic crew of friends.",
      "popularity": 1119.268,
      "poster_path": "/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg",
      "release_date": "2022-11-23",
      "title": "Glass Onion: A Knives Out Mystery",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 3017
    },
    {
      "adult": false,
      "backdrop_path": "/qHdPNd1cUaSNYLLNgt1Pv3LVd0T.jpg",
      "genre_ids": [
        878,
        28,
        12
      ],
      "id": 843794,
      "original_language": "ko",
      "original_title": "정이",
      "overview": "On an uninhabitable 22nd-century Earth, the outcome of a civil war hinges on cloning the brain of an elite soldier to create a robot mercenary.",
      "popularity": 1063.961,
      "poster_path": "/z2nfRxZCGFgAnVhb9pZO87TyTX5.jpg",
      "release_date": "2023-01-20",
      "title": "JUNG_E",
      "video": false,
      "vote_average": 6,
      "vote_count": 149
    },
    {
      "adult": false,
      "backdrop_path": "/ecaB1LUoQE1ylZJVF5KLRTkewt8.jpg",
      "genre_ids": [
        28,
        35,
        80
      ],
      "id": 683328,
      "original_language": "id",
      "original_title": "The Big 4",
      "overview": "A by-the-book female detective teams up with four down-on-their-luck assassins to investigate her father's murder.",
      "popularity": 995.081,
      "poster_path": "/jrw684BhFJZ9Jac6KJda3hSQkxt.jpg",
      "release_date": "2022-12-19",
      "title": "The Big 4",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 112
    },
    {
      "adult": false,
      "backdrop_path": "/xTsERrOCW15OIYl5aPX7Jbj38wu.jpg",
      "genre_ids": [
        28,
        18,
        36
      ],
      "id": 724495,
      "original_language": "en",
      "original_title": "The Woman King",
      "overview": "The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.",
      "popularity": 958.683,
      "poster_path": "/438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
      "release_date": "2022-09-16",
      "title": "The Woman King",
      "video": false,
      "vote_average": 7.9,
      "vote_count": 1141
    },
    {
      "adult": false,
      "backdrop_path": "/tsjXBo4LmzV0Bb9hdrz25tzX5GD.jpg",
      "genre_ids": [
        10402
      ],
      "id": 1041513,
      "original_language": "en",
      "original_title": "Encanto at the Hollywood Bowl",
      "overview": "A taped performance of the Encanto Live-to-Film Concert Experience at the Hollywood Bowl. The original cast puts on a miracle of a concert as they sing the favorite songs, accompanied by a full orchestra and 50 person ensemble, and the Hollywood Bowl transforms into Casita!",
      "popularity": 1046.15,
      "poster_path": "/sa3Ku5yNVjp8NloWxJoI9dQjvOi.jpg",
      "release_date": "2022-12-28",
      "title": "Encanto at the Hollywood Bowl",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 61
    },
    {
      "adult": false,
      "backdrop_path": "/7GmQKKAB3q3xkpxt1VFt2DrfviW.jpg",
      "genre_ids": [
        53,
        80
      ],
      "id": 934287,
      "original_language": "da",
      "original_title": "Klienten",
      "overview": "Renowned psychologist Susanne (Signe Egholm Olsen) is caught in a living nightmare when her new client (Anton Hjejle) turns out to be a wanted serial killer.",
      "popularity": 975.2,
      "poster_path": "/oUhZzMpHAMgdRgLbsvBIqhY7fKe.jpg",
      "release_date": "2022-06-20",
      "title": "The Last Client",
      "video": false,
      "vote_average": 8,
      "vote_count": 55
    },
  ],
  );

  const settingsLG = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    // autoplaySpeed: 1000,
    cssEase: "linear",
  }

  const settings = {
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    // autoplaySpeed: 1000,
    cssEase: "linear",
  }

  return (
    <>
      <div className='lg:hidden'>
        <HeroSlider {...settings}>
          {
            images.map((images, index) => {
              return (
                <div className='w-full h-60 md:h-80 py-3' key={index}>
                  {/* Here, object-cover is used for wrap the object/images */}
                  <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="Hero Banner" className='w-full h-full rounded-md object-cover z-0' />
                </div>
              )
            })
          }
        </HeroSlider>
      </div>


      <div className='hidden lg:block'>
        <HeroSlider {...settingsLG}>
          {
            images.map((images, index) => {
              return (
                <div className='w-full h-96 px-2 py-3' key={index}>
                  {/* Here, object-cover is used for wrap the object/images */}
                  <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} alt="Hero Banner" className='w-full h-full rounded-md object-cover z-0' />
                </div>
              )
            })
          }
        </HeroSlider>
      </div>
    </>
  )
}

export default HeroCarousel