import React from 'react';
import { useEffect } from 'react';
import './AboutPage.css';

const About = () => {

  useEffect(()=>{
    document.title="About"
 }, []);

  return (
    <div className="about-container">
      <h1 className="about-title">About Welcome Course Application</h1>
      <p className="about-description">
        Welcome Course Application is a platform designed to help you find and enroll in various courses. 
        </p>
    <p className="about-description">Our application is feel free to browser through our course catalog and start your learning journey today!</p>
      
      <p className="about-features">
        Key Features:
        <ul>
          <li>Wide range of courses available</li>
          <li>User-friendly interface</li>
          <li>Easy course enrollment process</li>
          <li>Track your progress</li>
          <li>Responsive design for mobile and desktop</li>
        </ul>
      </p>
    </div>
  );
};

export default About;
