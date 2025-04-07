import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";
import "./ContactPage.css";
import emailjs from '@emailjs/browser';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: 'Seleccione un servicio...'
  });
  const [formStatus, setFormStatus] = useState(null);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const formRef = useRef(null);
  const sectionRef = useRef(null);

  // Inicializar EmailJS
  useEffect(() => {
    // Inicializar EmailJS - Reemplaza "YOUR_PUBLIC_KEY" con tu clave pública real cuando implementes
    emailjs.init("1QyCoQC4xP3_fZNmP");
  }, []);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Función para obtener la fecha actual formateada
  const getFechaFormateada = () => {
    const fecha = new Date();
    return fecha.toLocaleString('es-ES', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id.replace('form', '').toLowerCase()]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormStatus('sending');
    
    try {
      // Preparar datos para el email del administrador
      const adminEmailData = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone || 'No especificado',
        subject: formData.subject,
        message: formData.message,
        service: formData.service,
        fecha: getFechaFormateada(),
        to_name: formData.name,
        to_email: formData.email,
        reply_to: formData.email
      };
      
      console.log("Enviando datos al administrador:", adminEmailData);
      
      // 1. Enviar email al administrador
      // Reemplaza "YOUR_SERVICE_ID_1" y "YOUR_TEMPLATE_ID_1" con tus IDs reales
      const adminResponse = await emailjs.send(
        "service_ybuxyxr", 
        "template_1l27212",
        adminEmailData
      );
      
      console.log('Email al administrador enviado correctamente', adminResponse);
      
      // 2. Preparar datos para el email del cliente
      const clientEmailData = {
        from_name: "Lautaro Recalde", // Nombre de tu empresa
        to_name: formData.name,
        to_email: formData.email,
        subject: "Confirmación de su solicitud: " + formData.subject,
        message: formData.message,
        service: formData.service,
        reply_to: "recaldelautaromanuel@gmail.com" // Email de tu empresa
      };
      
      console.log("Datos para email al cliente:", clientEmailData);
      
      // 3. Enviar email al cliente
      // Reemplaza "YOUR_SERVICE_ID_2" y "YOUR_TEMPLATE_ID_2" con tus IDs reales
      const clientResponse = await emailjs.send(
        "service_d3cj42p", 
        "template_er3ty7t",
        clientEmailData
      );
      
      console.log('Email al cliente enviado correctamente', clientResponse);
      
      // Actualizar estado y resetear formulario
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        service: 'Seleccione un servicio...'
      });
      
      // Resetear estado después de 5 segundos
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error('Error al enviar emails:', error);
      
      let errorMessage = 'Error al enviar el mensaje: ';
      if (error.text) {
        errorMessage += error.text;
      } else if (error.message) {
        errorMessage += error.message;
      } else {
        errorMessage += 'Error desconocido';
      }
      
      setFormStatus('error');
      console.error(errorMessage);
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <section className="contact-section" ref={sectionRef}>
      <div className="contact-bg-pattern"></div>
      <div className="contact-bg-gradient"></div>
      
      <Container className="position-relative">
        <div className="section-header text-center mb-5">
          <span className="section-subtitle">¿Hablamos?</span>
          <h2 className="section-title">Contacto</h2>
          <div className="section-divider"></div>
          <p className="section-description mx-auto">
            Estoy interesado en oportunidades de freelance y colaboraciones. Si tienes alguna pregunta o propuesta, 
            no dudes en contactarme utilizando el formulario a continuación.
          </p>
        </div>

        {/* Título y descripción antes del cuadro de contacto */}
        <div className="contact-intro text-center mb-4">
          <h3 className="contact-intro-title">Conectemos</h3>
          <p className="contact-intro-description mx-auto">
            Completa el formulario a continuación para iniciar una conversación. Estoy disponible para discutir tu proyecto
            y encontrar la mejor solución para tus necesidades digitales.
          </p>
        </div>

        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="contact-card border-0">
              <Card.Body className="p-0">
                <Row className="g-0">
                  <Col lg={5} className="contact-info-col">
                    <div className="contact-info-wrapper">
                      <div className="contact-info-header">
                        <h3 className="contact-info-title">Información de Contacto</h3>
                        <p className="contact-info-subtitle">
                          Estoy disponible para proyectos freelance y oportunidades laborales.
                        </p>
                      </div>
                      
                      <div className="contact-info-content">
                        <div className="contact-item">
                          <div className="contact-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                            </svg>
                          </div>
                          <div className="contact-text">
                            <h4>Ubicación</h4>
                            <p>Buenos Aires, Argentina</p>
                          </div>
                        </div>
                        
                        <div className="contact-item">
                          <div className="contact-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                            </svg>
                          </div>
                          <div className="contact-text">
                            <h4>Email</h4>
                            <p>laucharecalde680@gmail.com</p>
                          </div>
                        </div>
                        
                        <div className="contact-item">
                          <div className="contact-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                              <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                          </div>
                          <div className="contact-text">
                            <h4>Teléfono</h4>
                            <p>+54 3364 28 1300</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="contact-social">
                        <h4>Sígueme</h4>
                        <div className="social-links">
                          <a href="https://github.com/todoenunoo" target="_blank" rel="noopener noreferrer" className="social-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                          </a>
                          <a href="https://www.linkedin.com/in/lautaro-recalde-962b631a7/" target="_blank" rel="noopener noreferrer" className="social-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                          </a>
                          
                        </div>
                      </div>
                      
                      <div className="contact-decoration">
                        <div className="decoration-circle circle-1"></div>
                        <div className="decoration-circle circle-2"></div>
                        <div className="decoration-circle circle-3"></div>
                      </div>
                    </div>
                  </Col>
                  
                  <Col lg={7} className="contact-form-col">
                    <div className="contact-form-wrapper">
                      <h3 className="contact-form-title">Envíame un Mensaje</h3>
                      
                      {formStatus === 'success' && (
                        <Alert variant="success" className="mb-4">
                          <div className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                            </svg>
                            <div>
                              <strong>¡Mensaje enviado!</strong> Gracias por contactarme, responderé a la brevedad.
                            </div>
                          </div>
                        </Alert>
                      )}
                      
                      {formStatus === 'error' && (
                        <Alert variant="danger" className="mb-4">
                          <div className="d-flex align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                            </svg>
                            <div>
                              <strong>Error al enviar el mensaje.</strong> Por favor, inténtalo de nuevo más tarde.
                            </div>
                          </div>
                        </Alert>
                      )}
                      
                      <Form ref={formRef} onSubmit={handleSubmit}>
                        <Row>
                          <Col md={6}>
                            <Form.Group className="form-group" controlId="formName">
                              <Form.Label>Nombre Completo *</Form.Label>
                              <Form.Control 
                                type="text" 
                                placeholder="Tu nombre" 
                                className="form-control-custom"
                                value={formData.name}
                                onChange={handleChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="form-group" controlId="formEmail">
                              <Form.Label>Email *</Form.Label>
                              <Form.Control 
                                type="email" 
                                placeholder="Tu email" 
                                className="form-control-custom"
                                value={formData.email}
                                onChange={handleChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Row>
                          <Col md={6}>
                            <Form.Group className="form-group" controlId="formPhone">
                              <Form.Label>Teléfono</Form.Label>
                              <Form.Control 
                                type="tel" 
                                placeholder="Tu teléfono" 
                                className="form-control-custom"
                                value={formData.phone}
                                onChange={handleChange}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={6}>
                            <Form.Group className="form-group" controlId="formSubject">
                              <Form.Label>Asunto *</Form.Label>
                              <Form.Control 
                                type="text" 
                                placeholder="Asunto del mensaje" 
                                className="form-control-custom"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Form.Group className="form-group" controlId="formMessage">
                          <Form.Label>Mensaje *</Form.Label>
                          <Form.Control 
                            as="textarea" 
                            rows={5} 
                            placeholder="Tu mensaje" 
                            className="form-control-custom"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </Form.Group>

                        <Form.Group className="form-group" controlId="formService">
                          <Form.Label>Servicio de Interés</Form.Label>
                          <Form.Select 
                            className="form-control-custom"
                            value={formData.service}
                            onChange={handleChange}
                          >
                            <option>Seleccione un servicio...</option>
                            <option value="Desarrollo Web">Desarrollo Web</option>
                            <option value="Diseño UI/UX">Diseño UI/UX</option>
                            <option value="Desarrollo Full Stack">Desarrollo Full Stack</option>
                            <option value="Otro">Otro</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group className="form-group form-check">
                          <Form.Check 
                            type="checkbox" 
                            id="formPrivacy" 
                            label={<span>Acepto la <a href="/politica-privacidad">política de privacidad</a> y el tratamiento de mis datos.</span>}
                            required
                          />
                        </Form.Group>

                        <div className="form-submit">
                          <Button 
                            variant="primary" 
                            type="submit" 
                            className="submit-button"
                            disabled={formSubmitting}
                          >
                            {formSubmitting ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Enviando...
                              </>
                            ) : (
                              <>
                                Enviar Mensaje
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
                                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z"/>
                                </svg>
                              </>
                            )}
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactPage;
