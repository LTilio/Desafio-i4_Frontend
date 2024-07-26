import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { addPet } from "../../api/pets";
import "./FormPet.css";

enum Especie {
  CACHORRO = "Cachorro",
  GATO = "Gato",
  PASSARO = "Pássaro",
  OUTROS = "Outros",
}

const validationSchema = Yup.object({
  nome: Yup.string().required("Nome do pet é obrigatório!"),
  especie: Yup.string().required("Espécie do pet é obrigatória!"),
  idade: Yup.number()
    .required("Idade do pet é obrigatória!")
    .positive()
    .integer(),
  peso: Yup.number().required("Peso do pet é obrigatório!").positive(),
  corPelagem: Yup.string(),
  observacoes: Yup.string(),
  nomeDono: Yup.string(),
  contatoDono: Yup.string(),
  imagem: Yup.mixed().required("Arquivo é obrigatório"),
});

type FormValues = {
  nome: string;
  especie: string;
  raca?: string;
  idade: number;
  peso: number;
  corPelagem?: string;
  observacoes?: string;
  nomeDono?: string;
  contatoDono?: string;
  imagem: File | null;
};

const mapToBackendEspecie = (descricao: string): string => {
  switch (descricao) {
    case "Cachorro":
      return "CACHORRO";
    case "Gato":
      return "GATO";
    case "Pássaro":
      return "PASSARO";
    case "Outros":
      return "OUTROS";
    default:
      return "OUTROS"; // Valor padrão ou tratamento de erro
  }
};

const FormPet: React.FC = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleSubmit = async (values: FormValues) => {
    const petObj = {
      nome: values.nome,
      especie: mapToBackendEspecie(values.especie),
      raca: values.raca || "",
      idade: values.idade,
      peso: values.peso,
      corPelagem: values.corPelagem || "",
      observacoes: values.observacoes || "",
      nomeDono: values.nomeDono || "",
      contatoDono: values.contatoDono || "",
    };

    const formData = new FormData();
    formData.append(
      "pet",
      new Blob([JSON.stringify(petObj)], { type: "application/json" })
    );
    if (values.imagem) {
      formData.append("file", values.imagem);
    }

    try {
      const response = await addPet(formData);
      console.log("Pet registrado com sucesso!", response);
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer o POST:", error);
    }
  };
  const handleBack = () => {
    navigate("/");
  };

  return (
    <Formik
      initialValues={{
        nome: "",
        especie: "",
        raca: "",
        idade: 0,
        peso: 0,
        corPelagem: "",
        observacoes: "",
        nomeDono: "",
        contatoDono: "",
        imagem: null,
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="form-container">
          <div className="form-title">Registro de Pet</div>

          <div className="form-section">
            <label className="form-label">Nome:</label>
            <Field
              as="input"
              type="text"
              name="nome"
              className="form-control"
              placeholder="Digite o nome do pet..."
              aria-label="nome do pet"
            />
            <ErrorMessage
              name="nome"
              component="div"
              className="invalid-feedback"
            />
          </div>

          <div className="form-section">
            <label className="form-label">Espécie:</label>
            <Field
              as="select"
              name="especie"
              className="form-select"
              aria-label="espécie do pet"
            >
              <option value="" disabled>
                Selecione a espécie do pet...
              </option>
              {Object.values(Especie).map((especie) => (
                <option key={especie} value={especie}>
                  {especie}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="especie"
              component="div"
              className="invalid-feedback"
            />
          </div>

          <div className="form-section">
            <label className="form-label">Raça:</label>
            <Field
              as="input"
              type="text"
              name="raca"
              className="form-control"
              placeholder="Digite a raça do pet..."
              aria-label="raça do pet"
            />
          </div>

          <div className="form-section">
            <label className="form-label">Idade:</label>
            <Field
              as="input"
              type="number"
              name="idade"
              className="form-control"
              placeholder="Digite a idade do pet..."
              aria-label="idade do pet"
            />
            <ErrorMessage
              name="idade"
              component="div"
              className="invalid-feedback"
            />
          </div>

          <div className="form-section">
            <label className="form-label">Peso:</label>
            <Field
              as="input"
              type="number"
              name="peso"
              className="form-control"
              placeholder="Digite o peso do pet..."
              aria-label="peso do pet"
            />
            <ErrorMessage
              name="peso"
              component="div"
              className="invalid-feedback"
            />
          </div>

          <div className="form-section">
            <label className="form-label">Cor da Pelagem:</label>
            <Field
              as="input"
              type="text"
              name="corPelagem"
              className="form-control"
              placeholder="Digite a cor da pelagem do pet..."
              aria-label="cor da pelagem do pet"
            />
          </div>

          <div className="form-section">
            <label className="form-label">Observações:</label>
            <Field
              as="input"
              type="text"
              name="observacoes"
              className="form-control"
              placeholder="Digite observações sobre o pet..."
              aria-label="observações sobre o pet"
            />
          </div>

          <div className="form-section">
            <label className="form-label">Nome do Dono:</label>
            <Field
              as="input"
              type="text"
              name="nomeDono"
              className="form-control"
              placeholder="Digite o nome do dono do pet..."
              aria-label="nome do dono do pet"
            />
          </div>

          <div className="form-section">
            <label className="form-label">Contato do Dono:</label>
            <Field
              as="input"
              type="text"
              name="contatoDono"
              className="form-control"
              placeholder="Digite o contato do dono do pet..."
              aria-label="contato do dono do pet"
            />
          </div>

          <div className="form-section">
            <label className="form-label">Imagem:</label>
            <div className="file-input-container">
              <label className="file-input-label">
                Escolher imagem
                <input
                  type="file"
                  name="imagem"
                  className="file-input"
                  onChange={(event) => {
                    const file = event.target.files?.[0] || null;
                    setFieldValue("imagem", file);
                    if (file) {
                      setImagePreview(URL.createObjectURL(file));
                    } else {
                      setImagePreview(null);
                    }
                  }}
                  aria-label="imagem do pet"
                />
              </label>
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Imagem do pet"
                  className="image-preview"
                />
              )}
            </div>
            <ErrorMessage
              name="imagem"
              component="div"
              className="invalid-feedback"
            />
          </div>

          <div className="button-container">
            <button
              type="submit"
              className="submit-button"
              aria-label="botão de registrar"
            >
              Registrar
            </button>
            <button
              type="button"
              className="back-button"
              aria-label="botão de voltar"
              onClick={handleBack}
            >
              Voltar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormPet;
