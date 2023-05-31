import React from 'react';
import './HomePage.css';
import { useEffect } from 'react';
import backgroundImage from './backgroundImage/bgimage.jpg';

const HomePage = () => {

  useEffect(()=>{
    document.title="Home"
  }, []);

  return (
    <div className="home-page">
      <img src={backgroundImage} alt="Background" className="background-image" />
      <div className="overlay">
        <h1 className="welcome-text">Welcome to the Course Application</h1>
        <p className="description">
          This application is developed by Add Courses for learning purposes. The backend is built with Spring Boot, and the frontend is developed using React.js.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
