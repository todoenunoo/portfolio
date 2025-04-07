"use client"

import { useEffect, useRef } from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./Skills.css"

function Skills() {
  const sectionRef = useRef(null)

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add a delay based on the index for staggered animation
            setTimeout(() => {
              entry.target.classList.add("skill-animate")
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 },
    )

    const skillCards = document.querySelectorAll(".skill-card")
    skillCards.forEach((card) => {
      observer.observe(card)
    })

    return () => {
      skillCards.forEach((card) => {
        observer.unobserve(card)
      })
    }
  }, [])

  // Enhanced skills array with more information
  const skills = [
    {
      name: "JavaScript",
      level: 90,
      description: "ES6+, Async/Await, Promises",
      color: "#F7DF1E",
      bgColor: "#F7DF1E20",
      features: ["ES6+ Syntax", "Async Programming", "DOM Manipulation", "Functional Programming"],
    },
    {
      name: "React",
      level: 85,
      description: "Hooks, Context API, Redux",
      color: "#61DAFB",
      bgColor: "#61DAFB20",
      features: ["Hooks", "Context API", "Redux", "React Router"],
    },
    {
      name: "Node.js",
      level: 80,
      description: "Express, API REST, MongoDB",
      color: "#339933",
      bgColor: "#33993320",
      features: ["Express", "RESTful APIs", "MongoDB", "Authentication"],
    },
    {
      name: "HTML",
      level: 95,
      description: "Semántica, Accesibilidad, SEO",
      color: "#E34F26",
      bgColor: "#E34F2620",
      features: ["HTML5", "Semántica", "Accesibilidad", "Formularios Avanzados"],
    },
    {
      name: "CSS",
      level: 85,
      description: "Flexbox, Grid, Animations",
      color: "#264DE4",
      bgColor: "#264DE420",
      features: ["Flexbox", "CSS Grid", "Animations", "Responsive Design"],
    },
    {
      name: "SCSS",
      level: 88,
      description: "Variables, Mixins, Nesting",
      color: "#CD6799",
      bgColor: "#CD679920",
      features: ["Variables", "Mixins", "Nesting", "Functions"],
    },
    {
      name: "Bootstrap",
      level: 95,
      description: "Responsive Design, Components",
      color: "#7952B3",
      bgColor: "#7952B320",
      features: ["Grid System", "Components", "Responsive Design", "Customization"],
    },
    {
      name: "Vercel",
      level: 82,
      description: "Deployment, CI/CD, Serverless",
      color: "#000000",
      bgColor: "#00000015",
      features: ["Deployment", "CI/CD", "Serverless Functions", "Edge Functions"],
    },
    {
      name: "Firebase",
      level: 75,
      description: "Auth, Firestore, Hosting",
      color: "#FFCA28",
      bgColor: "#FFCA2820",
      features: ["Authentication", "Firestore", "Hosting", "Cloud Functions"],
    },
  ]

  return (
    <section className="skills-section py-5" ref={sectionRef}>
      <Container>
        <div className="section-header text-center mb-5">
          <span className="section-subtitle">Mis Tecnologías</span>
          <h2 className="section-title">Habilidades Técnicas</h2>
          <div className="section-divider"></div>
          <p className="section-description mx-auto">
            Estas son las tecnologías y herramientas con las que trabajo para crear aplicaciones web modernas,
            responsivas y de alto rendimiento.
          </p>
        </div>

        <Row className="g-4">
          {skills.map((skill, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <div className="skill-card h-100 border-0">
                <div className="skill-card-inner">
                  <div className="skill-card-front" style={{ backgroundColor: skill.bgColor }}>
                    <div className="skill-header" style={{ color: skill.color }}>
                      <div className="skill-icon-wrapper">
                        <div
                          className="skill-level-circle"
                          style={{
                            background: `conic-gradient(${skill.color} ${skill.level * 3.6}deg, #f1f5f9 0deg)`,
                          }}
                        >
                          <div className="skill-level-inner">
                            <span className="skill-level-percentage" style={{ color: skill.color }}>
                              {skill.level}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <h3 className="skill-name" style={{ color: skill.color }}>
                        {skill.name}
                      </h3>
                    </div>
                    <p className="skill-description">{skill.description}</p>
                    <div className="skill-level-wrapper">
                      <div className="skill-level-label">
                        <span>Nivel de experiencia</span>
                        <span className="skill-level-percentage" style={{ color: skill.color }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skill-level-bar">
                        <div
                          className="skill-level-progress"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: skill.color,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="skill-flip-hint">
                      <span>Ver detalles</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="skill-card-back" style={{ backgroundColor: skill.color }}>
                    <div className="skill-back-header">
                      <h3 className="skill-back-title">{skill.name}</h3>
                    </div>
                    <div className="skill-back-content">
                      <h4 className="skill-features-title">Características:</h4>
                      <ul className="skill-features-list">
                        {skill.features.map((feature, idx) => (
                          <li key={idx} className="skill-feature-item">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="white"
                              viewBox="0 0 16 16"
                              className="skill-feature-icon"
                            >
                              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="skill-back-level">
                        <div
                          className="skill-back-level-circle"
                          style={{
                            background: `conic-gradient(white ${skill.level * 3.6}deg, rgba(255,255,255,0.2) 0deg)`,
                          }}
                        >
                          <div className="skill-back-level-inner">
                            <span className="skill-back-level-percentage">{skill.level}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="skill-flip-back">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Skills

