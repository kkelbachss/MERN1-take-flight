import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      
      <Navbar bg="dark" variant="dark">
        <Container style={{marginLeft: "15px"}}>
          <Navbar.Brand href="#home">Take Flight API</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#flights">Flights</Nav.Link>
            <Nav.Link href="#pricing">Timeline</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default NavBar;