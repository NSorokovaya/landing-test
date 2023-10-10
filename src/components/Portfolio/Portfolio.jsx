import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from'./Portfolio.module.scss'; 
import Slide1 from '../../images/slide1.png';
import Slide2 from '../../images/slide2.png';
import Slide3 from '../../images/slide3.png';
import Title from '../Title/Title'



const Portfolio = () => {
  const sliderItems = [
    {
      imageSrc: Slide1,
      title: 'Marketplace',
      description: 'Volstiny production - Marketplace for a Designers agency. Powerful and creative website for powerfull creators. Unique design, a lot of animations and internal marketplace - website is faster than a Forest Gump and ready for a SEO and  campaigns.',
    },
    {
      imageSrc: Slide2,
      title: 'Web-Service',
      description: 'Lernitlive - webservice for coaches and experts where they can teachonline. In easy words - it is a marketplace with some more functionality to pass coursesand take classes. You can look throug the courses, choose your coach, according to hisrate and reviews. Functionality: you can register,buy classes, chat with your coach and leave reviews.',
    },
    {
      imageSrc: Slide3,
      title: 'Delivery Service',
      description: ' Iren Banquet Hall - Delivery service for tasty food from Iren. You can register, order and pay not leaving the website. ',
    },
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
        centerMode: true,
    centerPadding: "100px",

  };

  return (
    <div className={style.portfolio}>
      <Title text='Portfolio' />
      <Slider {...settings}>
        {sliderItems.map((item, index) => (
          <div key={index} className={style.sliderItem}>
            <img src={item.imageSrc} alt={item.title} />
            <div className={style.sliderDescription}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Portfolio;