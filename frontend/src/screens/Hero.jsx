//import { Container, Card, Button } from 'react-bootstrap';
import "../CSS/Hero.css";

const Hero = () => {
  return (
    <div className='hero-container'>
      <h1>Welcome to CV Builder</h1>
      <p>Create professional resumes effortlessly</p>
      <button className='start-button'>Get Started</button>
    </div>
  );
};

export default Hero;