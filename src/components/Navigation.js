import { Navbar, Nav, Container } from "react-bootstrap";
import "./Components.css";
const Navigation = () => {
  return (
    <>
      <Navbar
        bg='dark'
        className='color-nav'
        collapseOnSelect
        sticky='top'
        expand='sm'
        variant='dark'
      >
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/about'>About Me</Nav.Link>
              <Nav.Link href='/projects'>Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;
