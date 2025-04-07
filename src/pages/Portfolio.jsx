"use client"

import { useState, useEffect, useRef } from "react"
import { Container, Row, Col, Card, Badge, Button, Modal } from "react-bootstrap"
import "./Portfolio.css"

function Portfolio() {
  const [filter, setFilter] = useState("all")
  const [projects, setProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const sectionRef = useRef(null)

  // Proyectos reales
  const allProjects = [
    {
      id: 1,
      title: "Turnando",
      description: "Sistema de gestión de turnos para profesionales y empresas con suscripción mensual y anual.",
      longDescription:
        "Turnando es una plataforma completa de gestión de turnos diseñada para profesionales y empresas que necesitan organizar su agenda de manera eficiente. El sistema permite a los usuarios crear perfiles personalizados, configurar disponibilidad, y ofrecer a sus clientes la posibilidad de reservar citas en línea. Con un modelo de negocio basado en suscripciones mensuales y anuales, Turnando ofrece una solución escalable y rentable para la gestión de citas.",
      image: "/images/projects/turnando.jpg",
      url: "https://www.turnando.com/",
      github: "https://github.com/PulpoI/turnero",
      tags: ["React.js", "Vercel", "PHP", "SCSS", "HTML", "CSS"],
      category: "web",
      featured: true,
      color: "blue",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
      ),
      screenshots: [
        "/images/projects/turnando-1.jpg",
        "/images/projects/turnando-2.jpg",
        "/images/projects/turnando-3.jpg",
      ],
    },
    {
      id: 2,
      title: "Herramientas para Traders",
      description:
        "Aplicación web con herramientas esenciales para traders: zonas horarias, diccionario de términos y más.",
      longDescription:
        "Herramientas para Traders es una aplicación web diseñada para facilitar el trabajo diario de los traders. Incluye funcionalidades como un conversor de zonas horarias para mercados internacionales, un diccionario completo de términos financieros, calculadoras de riesgo y rentabilidad, y recursos educativos. Esta herramienta ayuda a los traders a tomar decisiones más informadas y a optimizar su flujo de trabajo.",
      image: "/images/projects/traders-tools.jpg",
      url: "https://todoenunoo.github.io/Herramientas-para-Traders/",
      github: "https://github.com/todoenunoo/Herramientas-para-Traders",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "tools",
      featured: false,
      color: "green",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20v-6M6 20V10M18 20V4"></path>
        </svg>
      ),
      screenshots: ["/images/projects/traders-tools-1.jpg", "/images/projects/traders-tools-2.jpg"],
    },
    {
      id: 3,
      title: "PDF Creator",
      description: "Herramienta para generar PDFs con imágenes optimizadas automáticamente.",
      longDescription:
        "PDF Creator es una solución simple pero efectiva diseñada para usuarios que necesitan crear documentos PDF con imágenes de manera frecuente. La aplicación permite cargar imágenes, las cuales son automáticamente ajustadas y optimizadas para adaptarse perfectamente al formato de página. El sistema organiza las imágenes de manera eficiente, permitiendo generar documentos profesionales con solo unos clics, ahorrando tiempo y esfuerzo en tareas repetitivas.",
      image: "/images/projects/pdf-creator.jpg",
      url: "https://todoenunoo.github.io/pdf-creator/",
      github: "https://github.com/todoenunoo/pdf-creator",
      tags: ["HTML", "CSS", "JavaScript", "jsPDF"],
      category: "tools",
      featured: false,
      color: "red",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      screenshots: ["/images/projects/pdf-creator-1.jpg", "/images/projects/pdf-creator-2.jpg"],
    },
    {
      id: 4,
      title: "TODO EN UNO",
      description: "Catálogo online con sistema de contacto y gestión de productos.",
      longDescription:
        "TODO EN UNO es un catálogo digital interactivo que permite a las empresas mostrar sus productos de manera atractiva y organizada. Incluye un sistema de contacto directo, categorización de productos, búsqueda avanzada y visualización detallada de artículos. Actualmente se está desarrollando una versión 2.0 que incorporará un panel de administración con control de inventario, estadísticas de visitas y gestión de pedidos, transformando el catálogo en una solución completa de e-commerce.",
      image: "/images/projects/todo-en-uno.jpg",
      url: "https://todoenunoo.github.io/TODO-EN-UNO/",
      github: "https://github.com/todoenunoo/TODO-EN-UNO",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "web",
      featured: false,
      color: "purple",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
      ),
      screenshots: ["/images/projects/todo-en-uno-1.jpg", "/images/projects/todo-en-uno-2.jpg"],
    },
    {
      id: 5,
      title: "Boletas App",
      description: "Aplicación para vendedores ambulantes que genera facturas en PDF y facilita la gestión de pedidos.",
      longDescription:
        "Boletas App es una solución móvil diseñada específicamente para vendedores ambulantes que necesitan generar facturas y gestionar pedidos en tiempo real. La aplicación permite seleccionar productos, cantidades y precios, calculando automáticamente los totales y generando facturas en formato PDF que pueden ser enviadas directamente al administrador para su procesamiento. Actualmente se está desarrollando una versión 2.0 con mejoras estéticas significativas y un dashboard completo para análisis de ventas y gestión de inventario.",
      image: "/images/projects/boletas-app.jpg",
      url: "https://todoenunoo.github.io/boletasapp/",
      github: "https://github.com/todoenunoo/boletasapp",
      tags: ["JavaScript", "HTML", "CSS", "jsPDF"],
      category: "app",
      featured: false,
      color: "orange",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <path d="M7 15h0M2 9.5h20"></path>
        </svg>
      ),
      screenshots: ["/images/projects/boletas-app-1.jpg", "/images/projects/boletas-app-2.jpg"],
    },
    {
      id: 6,
      title: "Portfolio Personal",
      description: "Sitio web personal para mostrar proyectos y habilidades profesionales.",
      longDescription:
        "Este portfolio personal es una plataforma moderna y responsiva diseñada para mostrar mis proyectos, habilidades y experiencia profesional de manera atractiva. Desarrollado con React y Bootstrap, incluye secciones para proyectos, información sobre mí, habilidades técnicas y formulario de contacto. El diseño se enfoca en la experiencia de usuario, con animaciones sutiles y navegación intuitiva para presentar mi trabajo de manera profesional a potenciales clientes y empleadores.",
      image: "/images/projects/portfolio.jpg",
      url: "#",
      github: "#",
      tags: ["React", "Bootstrap", "CSS", "JavaScript"],
      category: "web",
      featured: false,
      color: "teal",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      screenshots: ["/images/projects/portfolio-1.jpg", "/images/projects/portfolio-2.jpg"],
    },
    {
      id: 7,
      title: "Landing Page Aeronáutica",
      description: "Página de presentación para empresa de traslados aéreos (En desarrollo).",
      longDescription:
        "Proyecto en desarrollo para una empresa de servicios aeronáuticos especializada en traslados aéreos. La landing page está diseñada para presentar los servicios de la compañía de manera elegante y profesional, con secciones para la flota de aeronaves, destinos, servicios VIP y formulario de cotización. El diseño prioriza la experiencia visual con fotografías de alta calidad y una interfaz limpia que transmite seguridad y exclusividad, valores fundamentales para el sector aeronáutico.",
      image: "/images/projects/aero-landing.jpg",
      url: "#",
      github: "#",
      tags: ["React", "Next.js", "Tailwind CSS"],
      category: "in-progress",
      featured: false,
      color: "indigo",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      screenshots: ["/images/projects/aero-landing-1.jpg"],
    },
  ]

  // Filter projects based on selected category
  useEffect(() => {
    if (filter === "all") {
      setProjects(allProjects)
    } else {
      setProjects(allProjects.filter((project) => project.category === filter))
    }
  }, [filter])

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add a delay based on the index for staggered animation
            setTimeout(() => {
              entry.target.classList.add("project-animate")
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 },
    )

    const projectCards = document.querySelectorAll(".project-card")
    projectCards.forEach((card) => {
      observer.observe(card)
    })

    return () => {
      projectCards.forEach((card) => {
        observer.unobserve(card)
      })
    }
  }, [projects])

  // Handle project click
  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setShowModal(true)
  }

  // Close modal
  const handleCloseModal = () => {
    setShowModal(false)
  }

  // Get color class based on project color
  const getColorClass = (color) => {
    const colorMap = {
      blue: "project-blue",
      green: "project-green",
      red: "project-red",
      purple: "project-purple",
      orange: "project-orange",
      teal: "project-teal",
      indigo: "project-indigo",
    }
    return colorMap[color] || "project-blue"
  }

  return (
    <section className="portfolio-section" id="portfolio" ref={sectionRef}>
      <div className="portfolio-bg-pattern"></div>

      <Container>
        <div className="section-header text-center mb-5">
          <span className="section-subtitle">Mi Trabajo</span>
          <h2 className="section-title">Mis Proyectos</h2>
          <div className="section-divider"></div>
          <p className="section-description mx-auto">
            Una selección de mis proyectos más recientes y destacados. Haz clic en cualquier proyecto para ver más
            detalles.
          </p>
        </div>

        {/* Título y descripción antes de los filtros */}
        <div className="filter-intro text-center mb-4">
          <h3 className="filter-intro-title">Explora Mi Portafolio</h3>
          <p className="filter-intro-description mx-auto">
            Utiliza los filtros a continuación para navegar por mis diferentes proyectos según su categoría.
            Cada proyecto refleja mi pasión por crear soluciones digitales efectivas y atractivas.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="portfolio-filter text-center mb-5">
          <Button
            variant={filter === "all" ? "primary" : "outline-primary"}
            className="filter-btn me-2 mb-2"
            onClick={() => setFilter("all")}
          >
            Todos
          </Button>
          <Button
            variant={filter === "web" ? "primary" : "outline-primary"}
            className="filter-btn me-2 mb-2"
            onClick={() => setFilter("web")}
          >
            Desarrollo Web
          </Button>
          <Button
            variant={filter === "app" ? "primary" : "outline-primary"}
            className="filter-btn me-2 mb-2"
            onClick={() => setFilter("app")}
          >
            Aplicaciones
          </Button>
          <Button
            variant={filter === "tools" ? "primary" : "outline-primary"}
            className="filter-btn me-2 mb-2"
            onClick={() => setFilter("tools")}
          >
            Herramientas
          </Button>
          <Button
            variant={filter === "in-progress" ? "primary" : "outline-primary"}
            className="filter-btn mb-2"
            onClick={() => setFilter("in-progress")}
          >
            En Desarrollo
          </Button>
        </div>

        {/* Featured Projects */}
        {filter === "all" && (
          <div className="featured-projects mb-5">
            <h3 className="section-subtitle-alt mb-4">Proyectos Destacados</h3>
            <Row>
              {projects
                .filter((project) => project.featured)
                .map((project) => (
                  <Col key={project.id} md={6} className="mb-4">
                    <ProjectCard
                      project={project}
                      large
                      onClick={() => handleProjectClick(project)}
                      colorClass={getColorClass(project.color)}
                    />
                  </Col>
                ))}
            </Row>
          </div>
        )}

        {/* All Projects */}
        <div className="all-projects">
          {filter === "all" && <h3 className="section-subtitle-alt mb-4">Todos los Proyectos</h3>}
          <Row>
            {projects
              .filter((project) => (filter === "all" ? !project.featured : true))
              .map((project) => (
                <Col key={project.id} md={6} lg={4} className="mb-4">
                  <ProjectCard
                    project={project}
                    onClick={() => handleProjectClick(project)}
                    colorClass={getColorClass(project.color)}
                  />
                </Col>
              ))}
          </Row>
        </div>

        {/* No Projects Message */}
        {projects.length === 0 && (
          <div className="text-center py-5">
            <p className="text-muted">No hay proyectos disponibles en esta categoría.</p>
          </div>
        )}
      </Container>

      {/* Project Detail Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered className="project-modal">
        {selectedProject && (
          <>
            <Modal.Header closeButton className={`modal-header-custom ${getColorClass(selectedProject.color)}`}>
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="project-modal-content">
                <div className="project-modal-icon mb-4">
                  <div className={`modal-icon-wrapper ${getColorClass(selectedProject.color)}`}>
                    {selectedProject.icon}
                  </div>
                </div>

                <h4 className="mb-3">Descripción</h4>
                <p>{selectedProject.longDescription}</p>

                <h4 className="mb-3 mt-4">Tecnologías</h4>
                <div className="project-tags mb-4">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className={`project-tag ${getColorClass(selectedProject.color)}-tag`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="d-flex w-100 justify-content-between">
                <Button variant="outline-secondary" onClick={handleCloseModal}>
                  Cerrar
                </Button>
                <div>
                  {selectedProject.github !== "#" && (
                    <Button variant="outline-primary" href={selectedProject.github} target="_blank" className="me-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      GitHub
                    </Button>
                  )}
                  {selectedProject.url !== "#" && (
                    <Button
                      variant="primary"
                      href={selectedProject.url}
                      target="_blank"
                      className={`btn-${selectedProject.color}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="me-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                        />
                      </svg>
                      Ver Proyecto
                    </Button>
                  )}
                </div>
              </div>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  )
}

// Project Card Component
function ProjectCard({ project, large = false, onClick, colorClass }) {
  return (
    <Card className={`project-card border-0 h-100 ${large ? "featured-card" : ""} ${colorClass}`} onClick={onClick}>
      <div className="project-icon-container">
        <div className="project-icon">{project.icon}</div>
        <div className="project-pattern"></div>
      </div>
      <Card.Body className="p-4">
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title className="project-title">{project.title}</Card.Title>
          {project.featured && (
            <Badge bg="primary" className={`featured-badge ${colorClass}-badge`}>
              Destacado
            </Badge>
          )}
        </div>
        <Card.Text className="project-description">{project.description}</Card.Text>
        <div className="project-tags">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className={`project-tag ${colorClass}-tag`}>
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && <span className="project-tag-more">+{project.tags.length - 3}</span>}
        </div>
      </Card.Body>
      <div className="project-card-footer">
        <span className="view-details">Ver detalles</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
    </Card>
  )
}

export default Portfolio
