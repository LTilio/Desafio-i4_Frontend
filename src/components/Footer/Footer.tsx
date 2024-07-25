import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-light text-center py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={12} className="mb-3 mb-md-0">
            <div className="footer-dev">
              <FaCode size="60px" color="#1C1C1C" /> <p>Leandro Tilio</p>
            </div>
          </Col>
          <Col md={12}>
            <div className="footer-social-media">
              <a
                href="https://github.com/LTilio"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub size="40px" color="#1C1C1C" />
              </a>
              <a
                href="https://www.linkedin.com/in/leandro-tilio/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin size="40px" color="#1C1C1C" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
