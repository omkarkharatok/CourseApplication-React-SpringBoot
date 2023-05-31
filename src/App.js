import React from 'react';
import logo from "./logo.svg"
import './App.css';
import { Button,Container,Row,Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course'
import Allcourses from './components/Allcourses'
import AddCourse from './components/AddCourse';
import Header from "./components/Header"
import Menus from './components/Menus';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import HomePage from './components/HomePage';
  

function App() {

  const btnHandel=()=>{
    toast.success("Done")
  }
  return (
   <div>
  
  <BrowserRouter>
  <ToastContainer />
    <Header />
    <Container>
      <Row>
        <Col md={4}>
        <Menus />
        </Col>
        
        <Col md={8}>
          
          <Routes>

          <Route path='/' Component={HomePage} />
          <Route  path='/add-course' Component={AddCourse} />
          <Route path='/view-course' Component={Allcourses} />
          <Route path='/about-course' Component={About} />
         
          

          </Routes>
        </Col>
      </Row>
    </Container>
  </BrowserRouter>
 
   </div>
  );
}

export default App;
