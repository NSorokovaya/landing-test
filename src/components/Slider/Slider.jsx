import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'; // Ваші стилі
import Slide1 from '../../images/slide1.png';
import Slide2 from '../../images/slide2.png';
import Slide3 from '../../images/slide3.png';


const WhyUsSlider = () => {
  const sliderItems = [
    {
      imageSrc: Slide1,
      title: 'Slide 1',
      description: 'Description for Slide 1',
    },
    {
      imageSrc: Slide2,
      title: 'Slide 2',
      description: 'Description for Slide 2',
    },
    {
      imageSrc: Slide3,
      title: 'Slide 3',
      description: 'Description for Slide 3',
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {sliderItems.map((item, index) => (
        <div key={index}>
          <div className="slider-item">
            <img src={item.imageSrc} alt={item.title} />
          </div>
          <div className="slider-description">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default WhyUsSlider;