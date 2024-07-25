import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Button } from "react-bootstrap";
import imgLogo from "../../assets/logo.png";
import "./NavBar.css";

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/pets/new");
  };

  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <img src={imgLogo} alt="imagem da logo" className="logo-img" />
        </Link>
      </Navbar.Brand>
      <Navbar.Brand className="ml-auto" onClick={handleNavigate}>
        <Button variant="primary">Cadastrar Novo Pet</Button>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
