import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, Box, Container } from '@mui/material';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const SlideShowBar = ({ Images }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % Images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [Images.length]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <Box sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', }}>
        <ul style={{
          margin: '0',
          padding: '0',
          listStyle: 'none',
          borderRadius: '10px',
          width: '15%',
          backgroundColor: '#00000080',
          marginBottom: '40px'
        }}>{dots}</ul>
      </Box>
    ),
    customPaging: i => (
      <Box
        component="span"
        sx={{
          width: i === slideIndex ? '15px' : '11px',
          height: i === slideIndex ? '15px' : '11px',
          bgcolor: i === slideIndex ? '#fff' : '#bbb',
          borderRadius: '50%',
          display: 'inline-block',
          margin: '0 5px',
          cursor: 'pointer',
          textAlign: 'center',
          transition: 'width 0.6s ease, height 0.6s ease, bgcolor 0.6s ease',
        }}
      />
    ),
    beforeChange: (current, next) => setSlideIndex(next),
  };

  return (
    <Container>
    <Slider {...settings}>
      {Images.map((image, index) => (
        <div key={index} style={{ position: 'relative', zIndex: 1, marginTop: '20px', overflow: 'hidden', borderRadius: '25px' }}>
          <img
            style={{ width: '100%', height: '280px', borderRadius: '25px', marginTop: '20px'}}
            src={image.img}
            alt={`Slide ${index}`}
          />
        </div>
      ))}
    </Slider>
    </Container>
  );
};

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <Button
    style={{
      position: 'absolute',
      top: '50%',
      right: '5px',
      transform: 'translateY(-50%)',
      zIndex: 2,
      width: '0px',
      height: '0px'
    }}
    onClick={onClick}
  >
    <KeyboardArrowRightIcon
      sx={{
        color: 'white',
        backgroundColor: '#00000080',
        borderRadius: '30px',
        width: '85%',
        height: '40px',
        border: '3px solid white',
        '&:hover': { backgroundColor: 'black', color: 'white' }
      }}
    />
  </Button>
);

const PrevArrow = ({ onClick }) => (
  <Button
    style={{
      position: 'absolute',
      top: '50%',
      left: '5px',
      transform: 'translateY(-50%)',
      zIndex: 2,
      width: '0px',
      height: '0px'
    }}
    onClick={onClick}
  >
    <KeyboardArrowLeftIcon
      sx={{
        color: 'white',
        backgroundColor: '#00000080',
        borderRadius: '30px',
        width: '85%',
        height: '40px',
        border: '3px solid white',
        '&:hover': { backgroundColor: 'black', color: 'white' }
      }}
    />
  </Button>
);

export default SlideShowBar;
