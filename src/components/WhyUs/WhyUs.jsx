import React from 'react';
import './WhyUs.css'; 
import 'animate.css';
import Title from '../Title/Title'
  const WhyUs = () => {
  return (
    <div className="advantages ">
      <Title text='Why Us?' />
       <ul className="advantages__list ">
        <li className="advantages__item">
          <p className = "advantages__title ">Extensive Expertise</p>
          <div className="animate__animated ">
            <p className='advantages__text'> We boast a team of professionals with a wealth of experience and knowledge in diverse domains, allowing  to tackle a wide range of projects with confidence and precision.</p>
          </div>
        </li>
             <li className="advantages__item">
          <p className = "advantages__title">Client-Centered Approach</p>
          <div className="animate__animated ">
            <p className='advantages__text'> We place a strong emphasis on understanding and meeting the unique needs of each client. This client-centric approach ensures that solutions are tailored to specific requirements, fostering strong and lasting relationships.</p>
          </div>
        </li>
         <li className="advantages__item">
          <p className = "advantages__title">Innovative Solutions</p>
          <div className="animate__animated ">
            <p className='advantages__text'>  We are known for innovative approach to problem-solving. By staying at the forefront of industry trends and technologies, we consistently deliver cutting-edge solutions that drive tangible results.</p>
          </div>
          </li>
                   <li className="advantages__item">
          <p className = "advantages__title">Proven Track Record</p>
          <div className="animate__animated ">
            <p className='advantages__text'>  With a portfolio of successful projects and satisfied clients, we have established a solid track record of delivering high-quality work.</p>
          </div>
        </li>
                           <li className="advantages__item">
          <p className = "advantages__title">Effective Communication</p>
          <div className="animate__animated ">
            <p className='advantages__text'>  Open and transparent communication is a hallmark of our operations. You can expect clear and timely updates throughout the project lifecycle, ensuring that everyone is on the same page and well-informed.</p>
          </div>
        </li>
                           <li className="advantages__item">
          <p className = "advantages__title">Commitment to Quality</p>
          <div className="animate__animated animate__pulse">
            <p className='advantages__text'>  We maintain a stringent commitment to delivering work of the highest quality. </p>
          </div>
          </li>
        </ul>
    </div>
  );
};

export default WhyUs;