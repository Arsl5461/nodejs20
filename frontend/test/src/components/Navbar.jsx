import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function BasicExample() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Check token in localStorage every 30 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setToken(localStorage.getItem("token"));
    }, 2000); // 30 seconds

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link> <Link to={"/"}>Home</Link></Nav.Link>
            <Nav.Link> <Link to={"/dashboard"}>Dashboard</Link></Nav.Link>
            {token ? (
              <Nav.Link>
                <Link to={"/signup"} onClick={() => {
                  localStorage.removeItem("token");
                  setToken(null); // Update token state when logging out
                }}>Logout</Link>
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
