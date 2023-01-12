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

import { gql, useMutation, useLazyQuery } from '@apollo/client';

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
    Col,
    Card,
    CardBody,
    CardTitle,
    CardFooter
} from "reactstrap";

// core components
import { ImgNewPost } from '../../LienzoUrbano/components/UploadImages/ImgNewPost.js';
import { LUNavbar } from "LienzoUrbano/components/LUNavbar.jsx";

import { useForm } from "../../hooks/useForm";
import defaultImage from "assets/img/image_placeholder.jpg";
import defaultAvatar from "assets/img/placeholder.jpg";

const registerObraFormFields = {
    BOTitulo: '',
    BODescripcion: '',
    BOArtista: '',
    BOColores: '',
    BOMinHrsTra: '',
    BOMaxHrsTra: '',
    BOAltoMax: '',
    BOAltoMin: '',
    BOAnchoMax: '',
    BOAnchoMin: '',
    BOPrecMax: '',
    BOPrecMin: '',
    BOLatitud: '',
    BOLongitud: '',    
    BOMaterial: '',
    BOTags: '',
    BOCorriente: '',
}

var idObra;

export const Search = () => {
    const [profileTabs, setProfileTabs] = React.useState(1);


    const [tags, setTags] = React.useState([
        "HTML5",
        "CSS3",
        "JavaScript",
        "React"
    ]);

    //FORM
    const {
        BOTitulo,
        BODescripcion,
        BOArtista,
        BOColores,
        BOMinHrsTra,
        BOMaxHrsTra,
        BOAltoMax,
        BOAltoMin,
        BOAnchoMax,
        BOAnchoMin,
        BOPrecMax,
        BOPrecMin,
        BOLatitud,
        BOLongitud,
        BOMaterial,
        BOTags,
        BOCorriente,
        onInputChange } = useForm(registerObraFormFields);

    const BUSCAR_OBRAS = gql`
        query Artworks($filters: FindArtworksInput) {
        artworks(filters: $filters) {
            artist {
            email
            firstName
            lastName
            }
            imageUrl
            title
        }
      }`;

    const [registerSubmit, { loading, data, error }] = useLazyQuery(BUSCAR_OBRAS, {
        variables: {
            createArtworkInput: {
                ... BOTitulo ? { title: BOTitulo } : {},
                ... BODescripcion ? { description: BODescripcion } : {},                
                ... BOAltoMax ? { maxHeight: BOAltoMax } : {},
                ... BOPrecMax ? { maxPrice: BOPrecMax } : {},
                ... BOAnchoMax ? { maxWidth: BOAnchoMax } : {},
                ... BOMaxHrsTra ? { maxWorkingHours: BOMaxHrsTra } : {},
                ... BOAltoMin ? { minHeight: BOAltoMin } : {},
                ... BOPrecMin ? { minPrice: BOPrecMin } : {},
                ... BOAnchoMin ? { minWidth: BOAnchoMin } : {},                
                ... BOMinHrsTra ? { minWorkingHours: BOMinHrsTra } : {},   
                ... BOColores ? { color: BOColores } : {},   
                ... BOLatitud ? { latitude: BOLatitud } : {},   
                ... BOLongitud ? { longitude: BOLongitud } : {},  
                ... BOMaterial ? { materials: BOMaterial } : {},   
                ... BOTags ? { tags: BOTags } : {},   
                ... BOCorriente ? { movements: BOCorriente } : {},   
            }
        }
    });

    if (error) console.log(error.message);

    if (data && data.artworks) {
        // idObra = data.artworks.title;
    }

    if (loading) return <p>Loading ...</p>;
    return (
        <>
            <LUNavbar />
            <div className="wrapper">
                <div className="section">
                    <br /><br />
                    <Container fluid>
                        <Row>
                            <Col className="ml-auto" md="4">
                                <div className="section">
                                    <TabContent activeTab={"profile" + profileTabs}>
                                        <TabPane tabId="profile1">
                                            <Form type="form">
                                                <div>
                                                    <header>
                                                        <h2 className="text-uppercase">
                                                            BUSCAR UNA OBRA DE ARTE
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
                                                                    name="BOTitulo"
                                                                    value={BOTitulo}
                                                                    onChange={onInputChange}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    {/* <Row>
                                                        <Col className="align-self-center" md="3">
                                                            <label className="labels" htmlFor="#firstName">
                                                                Artista
                                                            </label>
                                                        </Col>
                                                        <Col className="align-self-center" md="9">
                                                            <FormGroup>
                                                                <Input
                                                                    type="text"
                                                                    name="BOArtista"
                                                                    value={BOArtista}
                                                                    onChange={onInputChange}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row> */}
                                                    <Row>
                                                        <Col className="align-self-center" md="3">
                                                            <label className="labels" htmlFor="#phone">
                                                                Colores
                                                            </label>
                                                        </Col>
                                                        <Col className="align-self-center" md="9">
                                                            <FormGroup>
                                                                <Input
                                                                    type="text"
                                                                    required="required"
                                                                    name="BOColores"
                                                                    value={BOColores}
                                                                    onChange={onInputChange}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="align-self-center" md="3">
                                                            <label className="labels" htmlFor="#phone">
                                                                Descripción
                                                            </label>
                                                        </Col>
                                                        <Col className="align-self-center" md="9">
                                                            <FormGroup>
                                                                <Input
                                                                    type="text"
                                                                    required="required"
                                                                    name="BODescripcion"
                                                                    value={BODescripcion}
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
                                                                    name="BOAltoMax"
                                                                    value={BOAltoMax}
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
                                                                    name="BOAltoMin"
                                                                    value={BOAltoMin}
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
                                                                    name="BOAnchoMax"
                                                                    value={BOAnchoMax}
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
                                                                    name="BOAnchoMin"
                                                                    value={BOAnchoMin}
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
                                                                    name="BOPrecMax"
                                                                    value={BOPrecMax}
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
                                                                    name="BOPrecMin"
                                                                    value={BOPrecMin}
                                                                    onChange={onInputChange}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="align-self-center" md="3">
                                                            <label className="labels" htmlFor="#phone">
                                                                Mínimo de Horas trabajadas
                                                            </label>
                                                        </Col>
                                                        <Col className="align-self-center" md="9">
                                                            <FormGroup>
                                                                <Input
                                                                    type="text"
                                                                    name="BOMaxHrsTra"
                                                                    value={BOMaxHrsTra}
                                                                    onChange={onInputChange}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="align-self-center" md="3">
                                                            <label className="labels" htmlFor="#phone">
                                                                Latitud
                                                            </label>
                                                        </Col>
                                                        <Col className="align-self-center" md="9">
                                                            <FormGroup>
                                                                <Input
                                                                    type="text"
                                                                    name="BOLatitud"
                                                                    value={BOLatitud}
                                                                    onChange={onInputChange}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="align-self-center" md="3">
                                                            <label className="labels" htmlFor="#phone">
                                                                Longitud
                                                            </label>
                                                        </Col>
                                                        <Col className="align-self-center" md="9">
                                                            <FormGroup>
                                                                <Input
                                                                    type="text"
                                                                    name="BOLongitud"
                                                                    value={BOLongitud}
                                                                    onChange={onInputChange}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="align-self-center" md="3">
                                                            <label className="labels" htmlFor="#phone">
                                                                Materiales
                                                            </label>
                                                        </Col>
                                                        <Col className="align-self-center" md="9">
                                                            <FormGroup>
                                                                <Input
                                                                    type="text"
                                                                    name="BOMaterial"
                                                                    value={BOMaterial}
                                                                    onChange={onInputChange}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
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
                                                                    name="BOTags"
                                                                    value={BOTags}
                                                                    onChange={onInputChange}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col className="align-self-center" md="3">
                                                            <label className="labels" htmlFor="#phone">
                                                                Corriente artística
                                                            </label>
                                                        </Col>
                                                        <Col className="align-self-center" md="9">
                                                            <FormGroup>
                                                                <Input
                                                                    type="text"
                                                                    name="BOCorriente"
                                                                    value={BOCorriente}
                                                                    onChange={onInputChange}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    {/* <Row>
                                                        <Col className="align-self-center" md="3">
                                                            <label className="labels" htmlFor="#phone">
                                                                Radio de Búsqueda
                                                            </label>
                                                        </Col>
                                                        <Col className="align-self-center" md="9">
                                                            <FormGroup>
                                                                <Input
                                                                    type="text"
                                                                    name="BORadioBus"
                                                                    value={BORadioBus}
                                                                    onChange={onInputChange}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row> */}
                                                    <Row className="mt-4">
                                                        <Col md="6">
                                                            <Button color="info" type="button" onClick={() => registerSubmit()}>
                                                                Buscar
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </Form>
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </Col>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Col md="5">
                                <Row>
                                    <Col lg="4" md="6">
                                        <Card className="card-blog card-plain">
                                            <div className="card-image">
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <img
                                                        alt="..."
                                                        className="img rounded"
                                                        src={require("assets/img/steven-roe.jpg")}
                                                    />
                                                </a>
                                            </div>
                                            <CardBody>
                                                <CardTitle tag="h4">
                                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                        That’s One Way To Ditch Your Passenger
                                                    </a>
                                                </CardTitle>
                                                <p className="card-description">
                                                    As near as we can tell, this guy must have thought he was
                                                    going over backwards and tapped the rear...
                                                </p>
                                                <CardFooter>
                                                    <div className="author">
                                                        <img
                                                            alt="..."
                                                            className="avatar img-raised"
                                                            src={require("assets/img/p10.jpg")}
                                                        />
                                                        <span className="ml-1">Mike John</span>
                                                    </div>
                                                </CardFooter>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
