import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';

const Sl = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const images = [
    { src: require('./images/1.jpg'), text: 'Fruit Plants', color: 'bisque', tex: 'We deals with the all types of fruit plants order now or contact us to get more information about fruit plants', color1:'black' },
    { src: require('./images/2.jpg'), text: 'Indoor Plants', tex:'Every kind of indoor plants are available scroll down to get more info', color:'darkgreen', color1:'black' },
    { src: require('./images/3.jpg'), text: 'Outdoor Plants', color:'darkslateblue', tex:'We have a variety of outdoor plants contact us to get more info', color1:'black' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    afterChange: (index) => {
      setActiveSlide(index);
    },
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <Box sx={{ width: '95%', margin: 'auto', position: 'relative', mt: 7, '@media (max-width: 660px)': { width: '86%' } }}>
      <Slider ref={sliderRef} {...settings}>
        {images.map((item, index) => (
          <Box key={index} style={{ position: 'relative' }}>
            <img
              src={item.src}
              alt={`slide-${index}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '10px',
                opacity: '0.7',
              }}
            />
            <Typography
              component="div"
              style={{
                position: 'absolute',
                top: '5%',
                left: '50%',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                width: '100%',
                fontSize: '40px',
                fontFamily: 'Poppins',
                color: item.color || 'white', 
              }}
            >
              {item.text}
              <Typography
              sx={{fontFamily:'Poppins',
            
          color: item.color1 || 'white'}}
              >{item.tex}</Typography>
            </Typography>
           
          </Box>
        ))}
      </Slider>
      <Box className="slick-arrow slick-prev" style={{ left: '0', zIndex: '1', cursor: 'pointer', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }} onClick={goToPrev}>
      </Box>
      <Box className="slick-arrow slick-next" style={{ right: '0', zIndex: '1', cursor: 'pointer', position: 'absolute', top: '50%', transform: 'translateY(-50%)' }} onClick={goToNext}>
        Next
      </Box>
    </Box>
  );
};

export default Sl;
