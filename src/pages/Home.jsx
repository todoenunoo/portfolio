import React, { useEffect } from 'react';
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

function Home() {
  // Smooth scroll for anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="home-page">
      {/* Hero section */}
      <section id="hero" className="hero-section">
        <Hero />
      </section>

      {/* About section */}
      <section id="about" className="about-section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={12}>
              <About />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Skills section */}
      <section id="skills" className="skills-section">
        <Container fluid className="p-0">
          <Skills />
        </Container>
      </section>

      
      
      {/* Scroll to top button */}
      <ScrollToTop />
    </div>
  );
}

// Scroll to top component
function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
      </svg>
    </button>
  );
}

export default Home;
