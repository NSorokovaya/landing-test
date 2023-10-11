import React, { useState } from 'react';
import style from './Services.module.scss';
import Title from 'components/Title/Title';
import Button from 'components/Button/Button';
const Services = () => {
  const servicesData = [
    {
      title: 'SOFTWARE DEVELOPMENT',
      description:
        'Our software is aiming to solve your business problems and meet specific business needs. Our experienced team can develop software for a wide range of industries and applications, especially agriculture, finance, healthcare, and logistics, among others. Our goal is to deliver high-quality software that will solve your business tasks and problems, and optimize your working processes to help your business grow.',
    },
    {
      title: 'DEVELOPMENT OF A UNIQUE ERP SYSTEM',
      description:
        'Developing customized ERP (Enterprise Resource Planning) systems that streamline your business operations, improve communication between departments and automate processes. Our ERP solutions are tailored to the unique needs of your business and can be integrated with other software solutions to provide a comprehensive business management system.',
    },
    {
      title: 'ONLINE-STORE DEVELOPMENT',
      description:
        'We offer online-store development services for clients who want to create an online presence for their business. Our team can build and design a customized e-commerce website that is easy to use and provides a seamless user experience. Our goal is to help you increase your online sales, expand customer base, and improve overall business performance. Deep understanding and large experience allows us to build the most conversional online-stores for you.',
    },
    {
      title: 'SUPPORT AND UPDATES',
      description:
        'We offer ongoing support and updates to ensure that your software solutions remain up-to-date and fully functional. Our support team is always ready to fix any issues or concerns that arise, so we provide regular updates to improve performance and add new features if needed. Our goal is to provide our clients with peace of mind and ensure that their software solutions continue to meet their needs over time.',
    },
    {
      title: 'BOT DEVELOPMENT',
      description:
        'We specialize in developing customized bots that can automate tasks and improve efficiency. We can create bots for a wide range of applications, including customer service, social media, and sales, among others. Our goal is to provide you with cutting-edge technology that improves their productivity and enhances their customer experience.',
    },
    {
      title: 'WEBSITE TRANSFERRING',
      description:
        'We offer website transferring services for clients who want to move their website from one platform to another. Our team of developers can ensure that the transition is smooth and seamless, and that the website remains fully functional throughout the process. Our goal is to minimize any disruptions to our clients online presence and ensure that their website continues to meet their business needs.',
    },
  ];
  const [selectedService, setSelectedService] = useState(servicesData[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (service, index) => {
    setSelectedService(service);
    setActiveIndex(index);
  };

  return (
    <div>
      <Title text="SERVICES" />

      <div className={style.services}>
        <ul className={style.servicesTitle}>
          {servicesData.map((service, index) => (
            <li
              key={index}
              onClick={() => handleClick(service, index)}
              className={`${style.servicesItem} ${
                activeIndex === index ? style.active : ''
              }`}
            >
              {service.title}
            </li>
          ))}
        </ul>

        {selectedService && (
          <div className={style.selectedServiceItem}>
            <h3 className={style.selectedServiceTitle}>
              {selectedService.title}
            </h3>
            <p className={style.selectedServiceDescription}>
              {selectedService.description}
            </p>
            <Button
              text="Want"
              onClick={() =>
                handleClick(servicesData[activeIndex], activeIndex)
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
