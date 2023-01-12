/*!

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components

import { useAuthStore } from '../../hooks/useAuthStore';

import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,   
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";


export const LUNavbar = () => {
    const { startLogout } = useAuthStore();

    const [collapseOpen, setCollapseOpen] = React.useState(false);
    const [collapseOut, setCollapseOut] = React.useState("");
    const [color, setColor] = React.useState("navbar-transparent");


    React.useEffect(() => {
        window.addEventListener("scroll", changeColor);
        return function cleanup() {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);

    const changeColor = () => {
        if (
            document.documentElement.scrollTop > 99 ||
            document.body.scrollTop > 99
        ) {
            setColor("bg-info");
        } else if (
            document.documentElement.scrollTop < 100 ||
            document.body.scrollTop < 100
        ) {
            setColor("navbar-transparent");
        }
    };
    const toggleCollapse = () => {
        document.documentElement.classList.toggle("nav-open");
        setCollapseOpen(!collapseOpen);
    };
    const onCollapseExiting = () => {
        setCollapseOut("collapsing-out");
    };
    const onCollapseExited = () => {
        setCollapseOut("");
    };
    return (
        <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg" style={{height: '100px'}}>
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand to="/" id="navbar-brand" tag={Link}>
                        <br/>
                        <h3><img alt="..." src={require("assets/img/LU_logo.png")} /><span>Lienzo Urbano</span></h3>
                    </NavbarBrand>
                </div>
                <Collapse
                    className={"justify-content-end " + collapseOut}
                    navbar
                    isOpen={collapseOpen}
                    onExiting={onCollapseExiting}
                    onExited={onCollapseExited}
                >
                    <div className="navbar-collapse-header">
                        <Row>
                            <Col className="collapse-brand" xs="6">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                </a>
                            </Col>
                            <Col className="collapse-close text-right" xs="6">
                                <button
                                    aria-expanded={collapseOpen}
                                    className="navbar-toggler"
                                    onClick={toggleCollapse}
                                >
                                    <i className="tim-icons icon-simple-remove" />
                                </button>
                            </Col>
                        </Row>
                    </div>
                    <Nav navbar>
                        <NavItem>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1"> <i className="fas fa-search" /></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Buscar" aria-label="Buscar" aria-describedby="basic-addon1" />
                            </div>
                        </NavItem>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <NavItem className="p-0">
                            <NavLink
                                tag={Link}
                                to="/"
                            >
                                <i className="fas fa-home" style={{ 'fontSize': '30px' }} />
                                <p className="d-lg-none d-xl-none"></p>
                            </NavLink>
                        </NavItem>
                        <NavItem className="p-0">
                            <NavLink
                                tag={Link}
                                to="/"
                            >
                                <i className="fas fa-bell" style={{ 'fontSize': '30px' }} />
                                <p className="d-lg-none d-xl-none"></p>
                            </NavLink>
                        </NavItem>
                        <NavItem className="p-0">
                            <NavLink
                                tag={Link}
                                to="/chat"
                            >
                                <i className="fas fa-comment-alt" style={{ 'fontSize': '30px' }} />
                                <p className="d-lg-none d-xl-none"></p>
                            </NavLink>
                        </NavItem>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <NavItem className="p-0">
                            <NavLink
                                tag={Link}
                                to="/map"
                            >
                                <i className="fa-solid fa-map-location" style={{ 'fontSize': '30px' }} />
                                <p className="d-lg-none d-xl-none"></p>
                            </NavLink>
                        </NavItem>
                        &nbsp;
                        &nbsp;
                        &nbsp;
                        <UncontrolledDropdown nav>
                            <DropdownToggle caret color="default" nav>
                                <i className="fas fa-user-circle" style={{ 'fontSize': '30px' }} />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-with-icons">
                                <DropdownItem to="/profile" tag={Link}>
                                    <i className="fas fa-user-circle" />
                                    Tu Perfil
                                </DropdownItem>
                                <DropdownItem to="/accountSettings" tag={Link}>
                                    <i className="fas fa-user-cog" />
                                    Configuración
                                </DropdownItem>
                                <DropdownItem to="/colections" tag={Link}>
                                    <i className="fas fa-file-image" />
                                    Tus colecciones
                                </DropdownItem>
                                <DropdownItem
                                    data-placement="bottom"
                                    onClick={startLogout}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    title="Cerrar sesión"
                                >
                                    <i className="fas fa-sign-out-alt" />
                                    Cerrar Sesión
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}
