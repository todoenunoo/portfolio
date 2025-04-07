"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap"
import "./Navbar.css"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [pastHeroSection, setPastHeroSection] = useState(false)
  const location = useLocation()
  
  // Check if we're on the home page
  const isHomePage = location.pathname === "/"

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled down from top
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
      
      // Only check for hero section on home page
      if (isHomePage) {
        // Check if scrolled past hero section (adjust this value based on your hero height)
        // Assuming hero section is around 90vh (90% of viewport height)
        const heroSectionHeight = window.innerHeight * 0.9
        if (window.scrollY > heroSectionHeight - 100) {
          setPastHeroSection(true)
        } else {
          setPastHeroSection(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isHomePage])

  // On non-home pages, always set pastHeroSection to true for light mode
  useEffect(() => {
    if (!isHomePage) {
      setPastHeroSection(true)
    }
  }, [isHomePage])

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <BootstrapNavbar
      bg="transparent"
      variant={pastHeroSection ? "light" : "dark"}
      expand="lg"
      fixed="top"
      className={`navbar-custom ${scrolled ? "navbar-scrolled" : ""} ${expanded ? "navbar-expanded" : ""} ${pastHeroSection ? "navbar-light-mode" : ""} ${!isHomePage ? "non-home-navbar" : ""}`}
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className="navbar-brand-custom">
          <div className="brand-logo">
            <span className="logo-text">LR</span>
          </div>
          <span className="brand-text">
            <span className={`brand-first ${pastHeroSection ? "text-dark" : ""} ${!isHomePage ? "fw-bold" : ""}`}>Lautaro</span>
            <span className={`brand-last ${!isHomePage ? "fw-bold" : ""}`}>Recalde</span>
          </span>
        </BootstrapNavbar.Brand>
        
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler-custom">
          <span className={`toggler-icon ${pastHeroSection ? "toggler-dark" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </BootstrapNavbar.Toggle>
        
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className={`nav-link-custom ${isActive("/") ? "active" : ""} ${pastHeroSection ? "nav-link-dark" : ""} ${!isHomePage ? "fw-bold" : ""}`}
              onClick={() => setExpanded(false)}
            >
              <span className="nav-link-text">Inicio</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/portfolio"
              className={`nav-link-custom ${isActive("/portfolio") ? "active" : ""} ${pastHeroSection ? "nav-link-dark" : ""} ${!isHomePage ? "fw-bold" : ""}`}
              onClick={() => setExpanded(false)}
            >
              <span className="nav-link-text">Proyectos</span>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`nav-link-custom ${isActive("/contact") ? "active" : ""} ${pastHeroSection ? "nav-link-dark" : ""} ${!isHomePage ? "fw-bold" : ""}`}
              onClick={() => setExpanded(false)}
            >
              <span className="nav-link-text">Contacto</span>
            </Nav.Link>
            <div className="nav-button">
              <a 
                href="https://github.com/todoenunoo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`github-button ${pastHeroSection ? "github-button-dark" : ""} ${!isHomePage ? "fw-bold" : ""}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="github-icon">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar
