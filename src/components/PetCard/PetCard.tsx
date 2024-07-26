import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { getAllPets } from "../../api/pets";
import { PetDto } from "../../types/types";
import { useNavigate } from "react-router-dom";
import "./PetCard.css";

const PetCard: React.FC = () => {
  const [pets, setPets] = useState<PetDto[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const petsData = await getAllPets();
        setPets(petsData);
        console.log(petsData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPets();
  }, []);

  const handleProfileClick = (petId: number) => {
    navigate(`/profile/${petId}`);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Card.Title className="card-title-header">Lista de Pets</Card.Title>
        {pets.map((pet) => (
          <Col key={pet.id} sm={12} md={6} lg={4} xl={3} className="mb-4">
            <Card className="pet-card">
              <Card.Img
                variant="top"
                src={pet.imagemUrl || "default-image-url"}
                alt={pet.nome}
                className="card-img-top"
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">{pet.nome}</Card.Title>
                <div className="card-idade">{pet.idade} anos</div>
                <Card.Text className="card-text">
                  <strong>Nome do Dono:</strong> {pet.nomeDono} <br />
                  <strong>Contato do Dono:</strong> {pet.contatoDono} <br />
                </Card.Text>
              </Card.Body>
              <div className="button-container-pet">
                <button
                  className="custom-button"
                  onClick={() => handleProfileClick(pet.id)}
                >
                  Ver Perfil
                </button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PetCard;
