import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from 'reactstrap';

// const toggleCollapse = () => {
//   document.documentElement.classList.toggle("nav-open");
//   setCollapseOpen(!collapseOpen);
// };
// const onCollapseExiting = () => {
//   setCollapseOut("collapsing-out");
// };
// const onCollapseExited = () => {
//   setCollapseOut("");
// };

export const PrincipalNavbar = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand href="#pablo" onClick={(e) => e.preventDefault()}>
              Lienzo Urbano
            </NavbarBrand>
            <button 
              className="navbar-toggler"               
              // aria-expanded={collapseOpen}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse navbar isOpen={false}>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="fab fa-facebook-square" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="fab fa-twitter" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="fab fa-google-plus" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="fab fa-instagram" />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  )
}
