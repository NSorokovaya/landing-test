import React from 'react';
import './WhyUs.css'; 
import 'animate.css';

  const WhyUs = () => {
  return (
    <div className="advantages">
      <h2>Why Choose Us</h2>
      <h3>Our IT solutions in reliable hands</h3>
       <ul className="advantages__list ">
        <li className="advantages__item">
          <p>Extensive Expertise</p>
          <div className="animate__animated ">
            <p> We boast a team of professionals with a wealth of experience and knowledge in diverse domains, allowing  to tackle a wide range of projects with confidence and precision.</p>
          </div>
        </li>
             <li className="advantages__item">
          <p>Client-Centered Approach</p>
          <div className="animate__animated ">
            <p> We place a strong emphasis on understanding and meeting the unique needs of each client. This client-centric approach ensures that solutions are tailored to specific requirements, fostering strong and lasting relationships.</p>
          </div>
        </li>
         <li className="advantages__item">
          <p>Innovative Solutions</p>
          <div className="animate__animated ">
            <p>  We are known for innovative approach to problem-solving. By staying at the forefront of industry trends and technologies, we consistently deliver cutting-edge solutions that drive tangible results.</p>
          </div>
          </li>
                   <li className="advantages__item">
          <p>Proven Track Record</p>
          <div className="animate__animated ">
            <p>  With a portfolio of successful projects and satisfied clients, we have established a solid track record of delivering high-quality work.</p>
          </div>
        </li>
                           <li className="advantages__item">
          <p>Effective Communication</p>
          <div className="animate__animated ">
            <p>  Open and transparent communication is a hallmark of our operations. You can expect clear and timely updates throughout the project lifecycle, ensuring that everyone is on the same page and well-informed.</p>
          </div>
        </li>
                           <li className="advantages__item">
          <p>Commitment to Quality</p>
          <div className="animate__animated animate__pulse">
            <p>  We maintain a stringent commitment to delivering work of the highest quality. </p>
          </div>
          </li>
        </ul>
    </div>
  );
};

export default WhyUs;