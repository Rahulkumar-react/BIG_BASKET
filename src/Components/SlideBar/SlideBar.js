import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Button, Box, Container } from '@mui/material';
import SlideShow1 from '../../Pages/Assets/slideshow1.webp';
import SlideShow2 from '../../Pages/Assets/slideshow2.webp';
import SlideShow3 from '../../Pages/Assets/slideshow3.webp';
import SlideShow4 from '../../Pages/Assets/slideshow4.webp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const images = [
  { src: SlideShow1, alt: 'Slide 1' },
  { src: SlideShow2, alt: 'Slide 2' },
  { src: SlideShow3, alt: 'Slide 3' },
  { src: SlideShow4, alt: 'Slide 4' }
];

const SimpleSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

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
      <Box textAlign="center" marginTop="20px">
        <ul style={{ margin: '0', padding: '0', listStyle: 'none' }}>{dots}</ul>
      </Box>
    ),
    customPaging: i => (
      <Box
        component="span"
        sx={{
          width: '12px',
          height: '12px',
          bgcolor: i === slideIndex ? 'black' : '#bbb', // Set active dot color to black
          borderRadius: '50%',
          display: 'inline-block',
          margin: '0 5px',
          cursor: 'pointer',
          transition: 'background-color 0.6s ease',
        }}
      />
    ),
    beforeChange: (current, next) => setSlideIndex(next), // Update slideIndex on slide change
  };

  return (
    <Container >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ position: 'relative', zIndex: 1 }}>
            <img
              style={{ width: '100%', height: 'auto', maxHeight: '100%', objectFit: 'contain', borderRadius: '50px' }}
              src={image.src}
              alt={image.alt}
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
        color: 'black',
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

export default SimpleSlider;
