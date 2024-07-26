import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { PetDto } from "../../types/types";
import { getPetById } from "../../api/pets";
import "./PetProfileCard.css";

const PetProfileCard: React.FC = () => {
  const { petId } = useParams<{ petId: string }>();
  const [pet, setPet] = useState<PetDto | null>(null);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const petData = await getPetById(Number(petId));
        setPet(petData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPet();
  }, [petId]);

  if (!pet) {
    return (
      <Container className="d-flex justify-content-center align-items-center">
        <h2>Pet não encontrado</h2>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="pet-profile-card">
            <Card.Img
              variant="top"
              src={pet.imagemUrl || "default-image-url"}
              alt={pet.nome}
              className="pet-profile-img"
            />
            <Card.Body className="pet-profile-body">
              <Card.Title className="pet-profile-title">{pet.nome}</Card.Title>
              <Card.Text className="pet-profile-text">
                <strong>Idade:</strong> {pet.idade} anos <br />
                <strong>Espécie:</strong> {pet.especie} <br />
                <strong>Raça:</strong> {pet.raca} <br />
                <strong>Peso:</strong> {pet.peso} kg <br />
                <strong>Cor da Pelagem:</strong> {pet.corPelagem} <br />
                <strong>Observações:</strong> {pet.observacoes} <br />
                <strong>Nome do Dono:</strong> {pet.nomeDono} <br />
                <strong>Contato do Dono:</strong> {pet.contatoDono} <br />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="pet-consultations-section">
        <Col md={8}>
          <h3 className="pet-consultations-title">Consultas Veterinárias</h3>
          {pet.consultas?.map((consulta) => (
            <Card key={consulta.id} className="mb-3 pet-consultation-card">
              <Card.Body>
                <Card.Title>Consulta com {consulta.nomeVeterinario}</Card.Title>
                <Card.Text>
                  <strong>Data:</strong> {consulta.dataConsulta} <br />
                  <strong>Sintomas:</strong> {consulta.sintomas} <br />
                  <strong>Diagnóstico:</strong> {consulta.diagnostico} <br />
                  <strong>Tratamento:</strong> {consulta.tratamento} <br />
                  <strong>Observações:</strong> {consulta.observacoes} <br />
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default PetProfileCard;
