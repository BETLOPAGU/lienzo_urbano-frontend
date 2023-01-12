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
// nodejs library that concatenates classes
import classnames from "classnames";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

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
import DemoFooter from "components/Footers/DemoFooter.js";
import ImageUpload from "../temp/components/CustomUpload/ImageUpload.js";
import TagsInput from "../temp/components/TagsInput/TagsInput.js";
import { LUNavbar } from "LienzoUrbano/components/LUNavbar.jsx";

export const AccountSettings = () => {
    const [profileTabs, setProfileTabs] = React.useState(1);
    const [tags, setTags] = React.useState([
        "HTML5",
        "CSS3",
        "JavaScript",
        "React"
    ]);
    const wrapper = React.useRef(null);
    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        wrapper.current.scrollTop = 0;
        document.body.classList.add("account-settings");
        return function cleanup() {
            document.body.classList.remove("account-settings");
        };
    }, []);
    return (
        <>
            <LUNavbar />
            <div className="wrapper" ref={wrapper}>
                <div className="section">
                    <br /><br />
                    <Container>
                        <Row>
                            <Col md="3">
                                <div className="section">
                                    {/* User Information */}
                                    <section className="text-center">
                                        <ImageUpload avatar addBtnColor="default" />
                                        <h3 className="title">Charlie Bailey</h3>
                                    </section>
                                    {/* User Information */}
                                    {/* Profile Sidebar */}
                                    <section>
                                        <br />
                                        <Nav className="flex-column nav-tabs-info" role="tablist">
                                            <NavItem>
                                                <NavLink
                                                    className={classnames({
                                                        active: profileTabs === 1
                                                    })}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        setProfileTabs(1);
                                                    }}
                                                    href="#pablo"
                                                >
                                                    <i className="tim-icons icon-single-02" /> General
                                                </NavLink>
                                            </NavItem>
                                            <hr className="line-info" />
                                            <p>En esta sección podrás actualizar tus datos. <a className="link footer-link">¿Deseas actualizar tu contraseña?</a></p>
                                        </Nav>
                                    </section>
                                </div>
                            </Col>
                            <Col className="ml-auto" md="8">
                                <div className="section">
                                    <TabContent activeTab={"profile" + profileTabs}>
                                        <TabPane tabId="profile1">
                                            <div>
                                                <header>
                                                    <h2 className="text-uppercase">
                                                        CONFIGURACIÓN DE TU PERFIL
                                                    </h2>
                                                </header>
                                                <hr className="line-info" />
                                                <br />
                                                <Row>
                                                    <Col className="align-self-center" md="3">
                                                        <label className="labels" htmlFor="#firstName">
                                                            Nombre
                                                        </label>
                                                    </Col>
                                                    <Col className="align-self-center" md="9">
                                                        <FormGroup>
                                                            <Input
                                                                defaultValue="Nombre del usuario"
                                                                id="firstName"
                                                                name="firstName"
                                                                required="required"
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="align-self-center" md="3">
                                                        <label className="labels" htmlFor="#lastName">
                                                            Apellido
                                                        </label>
                                                    </Col>
                                                    <Col className="align-self-center" md="9">
                                                        <FormGroup>
                                                            <Input
                                                                defaultValue="Apellido del usuario"
                                                                id="lastName"
                                                                name="lastName"
                                                                required="required"
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="align-self-center" md="3">
                                                        <label className="labels">Género</label>
                                                    </Col>
                                                    <Col className="align-self-center" md="4">
                                                        <FormGroup>
                                                            <Select
                                                                className="react-select react-select-info"
                                                                classNamePrefix="react-select"
                                                                placeholder="Gender"
                                                                options={[
                                                                    {
                                                                        value: "",
                                                                        label: "Gender",
                                                                        isDisabled: true
                                                                    },
                                                                    { value: "2", label: "Male" },
                                                                    { value: "3", label: "Female" }
                                                                ]}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="align-self-center" md="3">
                                                        <label className="labels">Cumpleaños</label>
                                                    </Col>
                                                    <Col className="align-self-center" md="9">
                                                        <Row>
                                                            <Col className="align-self-center" md="4">
                                                                <FormGroup>
                                                                    <Select
                                                                        className="react-select react-select-info"
                                                                        classNamePrefix="react-select"
                                                                        placeholder="Month"
                                                                        options={[
                                                                            { value: "", label: "January" },
                                                                            { value: "", label: "February" },
                                                                            { value: "", label: "March" },
                                                                            { value: "", label: "April" },
                                                                            { value: "", label: "May" },
                                                                            { value: "", label: "June" },
                                                                            { value: "", label: "July" },
                                                                            { value: "", label: "August" },
                                                                            { value: "", label: "September" },
                                                                            { value: "", label: "October" },
                                                                            { value: "", label: "November" },
                                                                            { value: "", label: "December" }
                                                                        ]}
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md="4">
                                                                <FormGroup>
                                                                    <Select
                                                                        className="react-select react-select-info"
                                                                        classNamePrefix="react-select"
                                                                        placeholder="Day"
                                                                        options={[
                                                                            { value: "", label: "1" },
                                                                            { value: "", label: "2" },
                                                                            { value: "", label: "3" },
                                                                            { value: "", label: "4" },
                                                                            { value: "", label: "5" },
                                                                            { value: "", label: "6" },
                                                                            { value: "", label: "7" },
                                                                            { value: "", label: "8" },
                                                                            { value: "", label: "9" },
                                                                            { value: "", label: "10" },
                                                                            { value: "", label: "11" },
                                                                            { value: "", label: "12" },
                                                                            { value: "", label: "13" },
                                                                            { value: "", label: "14" },
                                                                            { value: "", label: "15" },
                                                                            { value: "", label: "16" },
                                                                            { value: "", label: "17" },
                                                                            { value: "", label: "18" },
                                                                            { value: "", label: "19" },
                                                                            { value: "", label: "20" },
                                                                            { value: "", label: "21" },
                                                                            { value: "", label: "22" },
                                                                            { value: "", label: "23" },
                                                                            { value: "", label: "24" },
                                                                            { value: "", label: "25" },
                                                                            { value: "", label: "26" },
                                                                            { value: "", label: "27" },
                                                                            { value: "", label: "28" },
                                                                            { value: "", label: "29" },
                                                                            { value: "", label: "30" },
                                                                            { value: "", label: "31" }
                                                                        ]}
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                            <Col md="4">
                                                                <FormGroup>
                                                                    <Select
                                                                        className="react-select react-select-info"
                                                                        classNamePrefix="react-select"
                                                                        placeholder="Year"
                                                                        options={[
                                                                            { value: "", label: "1986" },
                                                                            { value: "", label: "1987" },
                                                                            { value: "", label: "1988" },
                                                                            { value: "", label: "1989" },
                                                                            { value: "", label: "1990" },
                                                                            { value: "", label: "1991" },
                                                                            { value: "", label: "1992" },
                                                                            { value: "", label: "1993" },
                                                                            { value: "", label: "1994" },
                                                                            { value: "", label: "1995" },
                                                                            { value: "", label: "1996" },
                                                                            { value: "", label: "1997" },
                                                                            { value: "", label: "1998" },
                                                                            { value: "", label: "1999" },
                                                                            { value: "", label: "2000" },
                                                                            { value: "", label: "2001" },
                                                                            { value: "", label: "2002" },
                                                                            { value: "", label: "2003" },
                                                                            { value: "", label: "2004" },
                                                                            { value: "", label: "2005" },
                                                                            { value: "", label: "2006" },
                                                                            { value: "", label: "2007" },
                                                                            { value: "", label: "2008" },
                                                                            { value: "", label: "2009" },
                                                                            { value: "", label: "2010" },
                                                                            { value: "", label: "2011" },
                                                                            { value: "", label: "2012" },
                                                                            { value: "", label: "2013" },
                                                                            { value: "", label: "2014" },
                                                                            { value: "", label: "2015" },
                                                                            { value: "", label: "2016" },
                                                                            { value: "", label: "2017" },
                                                                            { value: "", label: "2018" },
                                                                            { value: "", label: "2019" }
                                                                        ]}
                                                                    />
                                                                </FormGroup>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="align-self-center" md="3">
                                                        <label className="labels" htmlFor="#email">
                                                            Correo electrónico
                                                        </label>
                                                    </Col>
                                                    <Col className="align-self-center" md="9">
                                                        <FormGroup>
                                                            <Input
                                                                defaultValue="charlie.bailey@example.com"
                                                                id="email"
                                                                name="email"
                                                                required="required"
                                                                type="email"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="align-self-center" md="3">
                                                        <label className="labels" htmlFor="#location">
                                                            Dirección
                                                        </label>
                                                    </Col>
                                                    <Col className="align-self-center" md="9">
                                                        <FormGroup>
                                                            <Input
                                                                defaultValue="Sydney, A"
                                                                id="location"
                                                                name="location"
                                                                required="required"
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col className="align-self-center" md="3">
                                                        <label className="labels" htmlFor="#phone">
                                                            Teléfono
                                                        </label>
                                                    </Col>
                                                    <Col className="align-self-center" md="4">
                                                        <FormGroup>
                                                            <Input
                                                                defaultValue="+40 745 031 200"
                                                                id="phone"
                                                                name="phone"
                                                                required="required"
                                                                type="tel"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-4">
                                                    <Col md="6">
                                                        <Button color="info" type="button">
                                                            Guardar cambios
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
                                        </TabPane>
                                    </TabContent>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    );
}
