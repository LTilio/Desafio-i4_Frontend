import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Button } from "react-bootstrap";
import imgLogo from "../../assets/logo.png";
import "./NavBar.css";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img src={imgLogo} alt="imagem da logo" className="logo-img" />
        </Link>
      </Navbar.Brand>
      <Navbar.Brand className="ml-auto">
        <Button variant="primary" onClick={() => navigate("/cadastro-pet")}>
          Cadastrar Novo Pet
        </Button>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
