import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

const NavHeader = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link}>Travel With Us</Navbar.Brand>
          <Nav className="text-right">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/add-travel">Add Travel</Nav.Link>
        
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavHeader;
