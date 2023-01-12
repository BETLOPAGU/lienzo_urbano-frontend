/*!

=========================================================
* BLK Design System PRO React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { useEffect } from "react";
import Select from "react-select";
// nodejs library that concatenates classes
import PropTypes from "prop-types";

import { gql, useMutation, useQuery } from '@apollo/client';

import Swal from 'sweetalert2';
// react plugin used to create DropdownMenu for selecting items

// reactstrap components
import {
  Alert,
  Button,
  Label,
  FormGroup,
  Form,
  Input,
  CustomInput,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import { ImgNewPost } from '../../LienzoUrbano/components/UploadImages/ImgNewPost.js';
import { LUNavbar } from "LienzoUrbano/components/LUNavbar.jsx";

import { useForm } from "../../hooks/useForm";
import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";

const registerObraFormFields = {
  ROTitulo: '',
  RODescripcion: '',
  RODireccion: '',
  ROMaxHrsTra: '',
  ROMinHrsTra: '',
  ROMateriales: '',
  ROAltoMax: '',
  ROAltoMin: '',
  ROAnchoMax: '',
  ROAnchoMin: '',
  ROPrecMax: '',
  ROPrecMin: '',
  ROCorrientes: '',
  ROTags: '',
  ROCollaborators: '',
  ROImagen: '',
}

var idObra;
var avatar;
var addBtnColor;
var addBtnClasses;
var changeBtnColor;
var changeBtnClasses;
var removeBtnColor;
var removeBtnClasses;

export const CreatePost = () => {
  const [profileTabs, setProfileTabs] = React.useState(1);


  const [tags, setTags] = React.useState([
    "HTML5",
    "CSS3",
    "JavaScript",
    "React"
  ]);

  //UOLOAD IMAGE BUTTON
  const [file, setFile] = React.useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState(
    avatar ? defaultAvatar : defaultImage
  );
  const fileInput = React.useRef(null);
  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
  // eslint-disable-next-line
  const handleSubmit = (e) => {
    e.preventDefault();
    // file is the file/image uploaded
    // in this function you can save the image (file) on form submit
    // you have to call it yourself
  };
  const handleClick = () => {
    fileInput.current.click();
  };
  const handleRemove = () => {
    setFile(null);
    setImagePreviewUrl(avatar ? defaultAvatar : defaultImage);
    fileInput.current.value = null;
  };

  //FORM
  const { ROTitulo,
    RODescripcion,
    RODireccion,
    ROMaxHrsTra,
    ROMinHrsTra,
    ROMateriales,
    ROAltoMax,
    ROAltoMin,
    ROAnchoMax,
    ROAnchoMin,
    ROPrecMax,
    ROPrecMin,
    ROCorrientes,
    ROTags,
    ROCollaborators,
    ROImagen, onInputChange } = useForm(registerObraFormFields);

  const REGISTRAR_OBRA = gql`
    mutation CreateArtwork($createArtworkInput: CreateArtworkInput!) {
      createArtwork(createArtworkInput: $createArtworkInput) {
        title
        id
      }
    }`;

  const [registerSubmit, { loading, data, error }] = useMutation(REGISTRAR_OBRA, {
    variables: {
      createArtworkInput: {
        addresses: [RODireccion] || "",
        collaborators: [parseInt(ROCollaborators)] || "",
        description: RODescripcion || "",
        imageUrl: file || "",
        materials: [ROMateriales] || "",
        maxHeight: parseFloat(ROAltoMax) || "",
        maxPrice: parseFloat(ROPrecMax) || "",
        maxWidth: parseFloat(ROAnchoMax) || "",
        maxWorkingHours: parseInt(ROMaxHrsTra) || "",
        minHeight: parseFloat(ROAltoMin) || "",
        minPrice: parseFloat(ROPrecMin) || "",
        minWidth: parseFloat(ROAnchoMin) || "",
        minWorkingHours: parseInt(ROMinHrsTra) || "",
        movements: [ROCorrientes] || "",
        tags: ROTags || "",
        title: ROTitulo || "",
      }
    }
  });

  if (error) console.log(error.message);

  if (data && data.createArtwork) {
    idObra = data.createArtwork.id;
  }

  useEffect(() => {
    if (idObra !== undefined) {
      Swal.fire({ title: 'Obra nueva creada' });
    }
    idObra = undefined;
  }, [idObra]);

  if (loading) return <p>Loading ...</p>;
  return (
    <>
      <LUNavbar />
      <div className="wrapper">
        <div className="section">
          <br /><br />
          <Container fluid>
            <Row>
              <Col className="ml-auto" md="6">
                <div className="section">
                  <TabContent activeTab={"profile" + profileTabs}>
                    <TabPane tabId="profile1">
                      <Form type="form">
                        <div>
                          <header>
                            <h2 className="text-uppercase">
                              NUEVA OBRA DE ARTE
                            </h2>
                          </header>
                          <hr className="line-info" />
                          <br />
                          <Row>
                            <Col className="align-self-center" md="3">
                              <label className="labels" htmlFor="#phone">
                                Titulo de la obra
                              </label>
                            </Col>
                            <Col className="align-self-center" md="9">
                              <FormGroup>
                                <Input
                                  type="text"
                                  required="required"
                                  name="ROTitulo"
                                  value={ROTitulo}
                                  onChange={onInputChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="align-self-center" md="3">
                              <label className="labels" htmlFor="#firstName">
                                Descripción
                              </label>
                            </Col>
                            <Col className="align-self-center" md="9">
                              <FormGroup>
                                <Input
                                  type="text"
                                  name="RODescripcion"
                                  value={RODescripcion}
                                  onChange={onInputChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="align-self-center" md="3">
                              <label className="labels" htmlFor="#phone">
                                Dirección
                              </label>
                            </Col>
                            <Col className="align-self-center" md="9">
                              <FormGroup>
                                <Input
                                  type="text"
                                  required="required"
                                  name="RODireccion"
                                  value={RODireccion}
                                  onChange={onInputChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="align-self-center" md="3">
                              <label className="labels" htmlFor="#phone">
                                Colaborador
                              </label>
                            </Col>
                            <Col className="align-self-center" md="9">
                              <FormGroup>
                                <Input
                                  type="text"
                                  required="required"
                                  name="ROCollaborators"
                                  value={ROCollaborators}
                                  onChange={onInputChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <h5 className="text-warning">Separa los materiales utilizados por una coma, por ejemplo: pintura, stickers, papel</h5>
                          <Row>
                            <Col className="align-self-center" md="3">
                              <label className="labels" htmlFor="#lastName">
                                Materiales
                              </label>
                            </Col>
                            <Col className="align-self-center" md="9">
                              <FormGroup>
                                <Input
                                  type="text"
                                  required="required"
                                  name="ROMateriales"
                                  value={ROMateriales}
                                  onChange={onInputChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="align-self-center" md="3">
                              <label className="labels">Alto máximo de la Obra</label>
                            </Col>
                            <Col className="align-self-center" md="9">
                              <FormGroup>
                                <Input
                                  type="text"
                                  name="ROAltoMax"
                                  value={ROAltoMax}
                                  onChange={onInputChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="align-self-center" md="3">
                              <label className="labels">Alto mínimo de la Obra</label>
                            </Col>
                            <Col className="align-self-center" md="9">
                              <FormGroup>
                                <Input
                                  type="text"
                                  name="ROAltoMin"
                                  value={ROAltoMin}
                                  onChange={onInputChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="align-self-center" md="3">
                              <label className="labels" htmlFor="#email">
                                Ancho máximo de la obra
                              </label>
                            </Col>
                            <Col className="align-self-center" md="9">
                              <FormGroup>
                                <Input
                                  type="text"
                                  name="ROAnchoMax"
                                  value={ROAnchoMax}
                                  onChange={onInputChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="align-self-center" md="3">
                              <label className="labels" htmlFor="#email">
                                Ancho mínimo de la obra
                              </label>
                            </Col>
                            <Col className="align-self-center" md="9">
                              <FormGroup>
                                <Input
                                  type="text"
                                  name="ROAnchoMin"
                                  value={ROAnchoMin}
                                  onChange={onInputChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="align-self-center" md="3">
                              <label className="labels" htmlFor="#location">
                                Precio máximo
                              </label>
                            </Col>
                            <Col className="align-self-center" md="9">
                              <FormGroup>
                                <Input
                                  type="text"
                                  name="ROPrecMax"
                                  value={ROPrecMax}
                                  onChange={onInputChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="align-self-center" md="3">
                              <label className="labels" htmlFor="#email">
                                Precio mínimo
                              </label>
                            </Col>
                            <Col className="align-self-center" md="9">
                              <FormGroup>
                                <Input
                                  type="text"
                                  name="ROPrecMin"
                                  value={ROPrecMin}
                                  onChange={onInputChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="align-self-center" md="3">
                              <label className="labels" htmlFor="#phone">
                                Máximo de Horas de trabajo
                              </label>
                            </Col>
                            <Col className="align-self-center" md="9">
                              <FormGroup>
                                <Input
                                  type="text"
                                  name="ROMaxHrsTra"
                                  value={ROMaxHrsTra}
                                  onChange={onInputChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="align-self-center" md="3">
                              <label className="labels" htmlFor="#phone">
                                Mínimo de Horas de horas de trabajo
                              </label>
                            </Col>
                            <Col className="align-self-center" md="9">
                              <FormGroup>
                                <Input
                                  type="text"
                                  name="ROMinHrsTra"
                                  value={ROMinHrsTra}
                                  onChange={onInputChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <h5 className="text-warning">Separa las corrientes artísticas utilizados por una coma, por ejemplo: pintura, stickers, papel</h5>
                          <Row>
                            <Col className="align-self-center" md="3">
                              <label className="labels" htmlFor="#phone">
                                Corrientes Artísticas
                              </label>
                            </Col>
                            <Col className="align-self-center" md="9">
                              <FormGroup>
                                <Input
                                  type="text"
                                  required="required"
                                  name="ROCorrientes"
                                  value={ROCorrientes}
                                  onChange={onInputChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <h5 className="text-warning">Separa los tags utilizados por una coma, por ejemplo: pintura, stickers, papel</h5>
                          <Row>
                            <Col className="align-self-center" md="3">
                              <label className="labels" htmlFor="#phone">
                                Tags
                              </label>
                            </Col>
                            <Col className="align-self-center" md="9">
                              <FormGroup>
                                <Input
                                  type="text"
                                  required="required"
                                  name="ROTags"
                                  value={ROTags}
                                  onChange={onInputChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row className="mt-4">
                            <Col md="6">
                              <Button color="info" type="button" onClick={() => registerSubmit()}>
                                Subir Obra de Arte
                              </Button>
                              <Button
                                className="btn-simple ml-1"
                                color="info"
                                type="button"
                              >
                                Cancelar
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      </Form>
                    </TabPane>
                  </TabContent>
                </div>
              </Col>
              <Col md="5">
                <div className="section">
                  {/* User Information */}
                  <section className="text-center">
                    <div className="fileinput text-center">
                      <input type="file" onChange={handleImageChange} ref={fileInput} />
                      <div>
                        <br /><br /><br />
                        <img src={imagePreviewUrl} alt="..." />
                      </div>
                      <div>
                        {file === null ? (
                          <Button
                            color={addBtnColor}
                            className={addBtnClasses}
                            onClick={() => handleClick()}
                          >
                            {avatar ? "Agregar Imagen" : "Seleccionar Imagen"}
                          </Button>
                        ) : (
                          <span>
                            <Button
                              color={changeBtnColor}
                              className={changeBtnClasses}
                              onClick={() => handleClick()}
                            >
                              Cambiar
                            </Button>
                            {avatar ? <br /> : null}
                            <Button
                              color={removeBtnColor}
                              className={removeBtnClasses}
                              onClick={() => handleRemove()}
                            >
                              <i className="fa fa-times" /> Quitar
                            </Button>
                          </span>
                        )}
                      </div>
                    </div>
                  </section>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

ImgNewPost.defaultProps = {
  avatar: false,
  removeBtnClasses: "btn-round",
  removeBtnColor: "danger",
  addBtnClasses: "btn-round",
  addBtnColor: "primary",
  changeBtnClasses: "btn-round",
  changeBtnColor: "primary"
};

ImgNewPost.propTypes = {
  avatar: PropTypes.bool,
  removeBtnClasses: PropTypes.string,
  removeBtnColor: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "link"
  ]),
  addBtnClasses: PropTypes.string,
  addBtnColor: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "link"
  ]),
  changeBtnClasses: PropTypes.string,
  changeBtnColor: PropTypes.oneOf([
    "default",
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "link"
  ])
};

