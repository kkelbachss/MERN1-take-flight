import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import {Link} from 'react-router-dom';


//I dont really need navigation anyways
function NavBar() {
  return (
    <>
      {/* Had to tweak a bit to get the links working properly here, 
      tried to integrate react-bootstrap with router-dom */}
      <Navbar responsive="auto" bg="dark" variant="dark">
        <Container style={{marginLeft: "15px"}}>
          <Navbar.Brand href="/">Take Flight API</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Link to="/flights">Flights</Link>
            <Link to="/timeline">Timeline</Link>
            <Link to="/about">About</Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;