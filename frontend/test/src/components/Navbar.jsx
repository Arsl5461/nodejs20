import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom"

function BasicExample() {
  const token = localStorage.getItem("token")
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link to={"/"}>Home</Link></Nav.Link>
            {token ? (
              <Nav.Link>
                <Link to={"/signup"} onClick={()=>localStorage.removeItem("token")}>Logout</Link>
              </Nav.Link>
            ) : (
              <>
                <Nav.Link>
                  <Link to={"/signup"}>Signup</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to={"/login"}>Login</Link>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;