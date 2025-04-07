"use client"

import { useEffect, useState } from "react"
import { Container, Button, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Hero.css"

function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  // Animation on load
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="hero">
      <div className="hero-particles"></div>
      <div className="hero-overlay"></div>
      <Container className="position-relative z-index-1">
        <Row className="align-items-center justify-content-center min-vh-100">
          <Col lg={10} className="mx-auto text-center">
            <div className={`hero-content ${isLoaded ? "loaded" : ""}`}>
              <span className="badge bg-primary text-white mb-3 fw-normal px-3 py-2 animate-badge">
                Desarrollador Full Stack
              </span>
              <h1 className="hero-title mb-4">
                ¡Hola! Soy <span className="text-gradient">Lautaro Recalde</span>
              </h1>
              <p className="hero-subtitle mb-5">
                Creando experiencias web excepcionales con React, Node.js y JavaScript.
                <br className="d-none d-md-block" /> Transformando ideas en soluciones digitales elegantes.
              </p>
              <div className="d-flex flex-wrap gap-3 justify-content-center mb-5">
                <Button as={Link} to="/portfolio" variant="primary" className="btn-hero btn-glow px-4 py-2">
                  <span className="btn-text">Ver Proyectos</span>
                  <span className="btn-icon">→</span>
                </Button>
                <Button as={Link} to="/contact" variant="outline-light" className="btn-hero px-4 py-2">
                  <span className="btn-text">Contactarme</span>
                  <span className="btn-icon">✉</span>
                </Button>
              </div>
              <div className="social-links">
                <a href="https://github.com/todoenunoo" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/lautaro-recalde-962b631a7/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
                
              </div>
              <div className="scroll-indicator-wrapper">
                <div className="scroll-indicator">
                  <div className="mouse">
                    <div className="wheel"></div>
                  </div>
                  <div className="arrow-down">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero

