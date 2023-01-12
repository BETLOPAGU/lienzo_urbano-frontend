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
import { Link } from 'react-router-dom';
import Select from "react-select";
// nodejs library that concatenates classes
import PropTypes from "prop-types";
import { HuePicker, SketchPicker } from 'react-color';

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
    BORadBus: '',
}

var idObra;

export const Search = () => {
    const [colorB, setColorB] = React.useState(null);

    // const handleColorChange = (e) => {
    //     e.preventDefault();
    //     let reader = new FileReader();
    //     let file = e.target.files[0];
    //     reader.onloadend = () => {
    //         setFile(file);
    //         setImagePreviewUrl(reader.result);
    //     };
    //     reader.readAsDataURL(file);
    // };

    const state = {
        background: '#fff',
    };

    const handleChangeComplete = (color) => {
        this.setState({ background: color.hex });
    };

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
        BORadBus,
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
            id
        }
      }`;

    const [registerSubmit, { loading, data, error }] = useLazyQuery(BUSCAR_OBRAS, {
        variables: {
            createArtworkInput: {
                ...BOTitulo ? { title: BOTitulo } : {},
                ...BODescripcion ? { description: BODescripcion } : {},
                ...BOAltoMax ? { maxHeight: parseFloat(BOAltoMax) } : {},
                ...BOPrecMax ? { maxPrice: parseFloat(BOPrecMax) } : {},
                ...BOAnchoMax ? { maxWidth: parseFloat(BOAnchoMax) } : {},
                ...BOMaxHrsTra ? { maxWorkingHours: parseInt(BOMaxHrsTra) } : {},
                ...BOAltoMin ? { minHeight: parseFloat(BOAltoMin) } : {},
                ...BOPrecMin ? { minPrice: parseFloat(BOPrecMin) } : {},
                ...BOAnchoMin ? { minWidth: parseFloat(BOAnchoMin) } : {},
                ...BOMinHrsTra ? { minWorkingHours: parseInt(BOMinHrsTra) } : {},
                ...BOColores ? { color: parseFloat(BOColores) } : {},
                ...BOLatitud ? { latitude: parseFloat(BOLatitud) } : {},
                ...BOLongitud ? { longitude: parseFloat(BOLongitud) } : {},
                ...BOMaterial ? { materials: parseFloat(BOMaterial) } : {},
                ...BOTags ? { tags: BOTags } : {},
                ...BOCorriente ? { movements: BOCorriente } : {},
            }
        }
    });

    const BUSCAR_OBRAS_GEO = gql`
        query FindArtworksByGeoRadius($radius: Int!) {
        findArtworksByGeoRadius(radius: $radius) {
          artist {
            email
            firstName
            lastName
          }
          imageUrl
          title
          id
        }
      }`;

    const [radBusSubmit, { loading: loading2, data: data2, error: error2 }] = useLazyQuery(BUSCAR_OBRAS_GEO, {
        variables: {
            ...BORadBus ? { radius: parseInt(BORadBus) } : {},
        }
    });

    if (error) console.log(error.message);

    if (data && data.artworks) {
        console.log(data);
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
                                                            {/* <br/>
                                                            <HuePicker
                                                                color={colorB}
                                                                onChangeComplete={set}
                                                            />
                                                            <br/> */}
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
                                        <br/><br/><br/>
                                        <TabPane tabId="profile1">
                                            <Form type="form">
                                                <div>
                                                    <header>
                                                        <h2 className="text-uppercase">
                                                            BUSCAR POR DISTANCIA
                                                        </h2>
                                                    </header>
                                                    <hr className="line-info" />
                                                    <br />
                                                    <Row>
                                                        <Col className="align-self-center" md="3">
                                                            <label className="labels" htmlFor="#phone">
                                                                Radio de búsqueda
                                                            </label>
                                                        </Col>
                                                        <Col className="align-self-center" md="9">
                                                            <FormGroup>
                                                                <Input
                                                                    type="text"
                                                                    required="required"
                                                                    name="BORadBus"
                                                                    value={BORadBus}
                                                                    onChange={onInputChange}
                                                                />
                                                            </FormGroup>
                                                        </Col>
                                                    </Row>
                                                    <Row className="mt-4">
                                                        <Col md="6">
                                                            <Button color="info" type="button" onClick={() => radBusSubmit()}>
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
                                <div className="main main-raised">
                                    <Col lg="4" md="6">
                                        {
                                            data && data.artworks 
                                                ?
                                                data?.artworks.map(art => (
                                                    <Card className="card-blog card-plain" key={art.id}>
                                                        <div className="card-image">
                                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                                <img
                                                                    alt="..."
                                                                    className="img rounded"
                                                                    src={art.imageUrl}
                                                                />
                                                            </a>
                                                        </div>
                                                        <CardBody>
                                                            <CardTitle tag="h4">
                                                                <Link tag={Link} to={`/openPost${art.id}`}>                                                                    
                                                                </Link>
                                                                <p>{art.title}</p>
                                                            </CardTitle>
                                                            <CardFooter>
                                                                <div className="author">
                                                                    <span className="ml-1">{art.artist.firstName} {art.artist.lastName}</span>
                                                                    <span className="ml-1">{art.artist.email} </span>
                                                                </div>
                                                            </CardFooter>
                                                        </CardBody>
                                                    </Card>
                                                ))
                                                :
                                                <h1></h1>                                                
                                        }
                                                                                {
                                            data2 && data2.artworks 
                                                ?
                                                data2?.findArtworksByGeoRadius.map(art => (
                                                    <Card className="card-blog card-plain" key={art.id}>
                                                        <div className="card-image">
                                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                                <img
                                                                    alt="..."
                                                                    className="img rounded"
                                                                    src={art.imageUrl}
                                                                />
                                                            </a>
                                                        </div>
                                                        <CardBody>
                                                            <CardTitle tag="h4">
                                                                <Link tag={Link} to={`/openPost${art.id}`}>
                                                                    {data.artworks.title}
                                                                </Link>
                                                            </CardTitle>
                                                            <CardFooter>
                                                                <div className="author">
                                                                    <span className="ml-1">{art.artist.firstName} {art.artist.lastName}</span>
                                                                    <span className="ml-1">{art.artist.email} </span>
                                                                </div>
                                                            </CardFooter>
                                                        </CardBody>
                                                    </Card>
                                                ))
                                                :
                                                <h1></h1>                                                
                                        }
                                    </Col>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
