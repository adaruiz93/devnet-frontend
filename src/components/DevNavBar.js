import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';

const DevNavBar = (props) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">
         <img
           alt=""
           src="https://i.imgur.com/kPPJDNr.png"
           width="40"
           height="40"
           className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>
        <Navbar.Brand href="/">DevNet</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/devnet/">Posts</Nav.Link>
            <Nav.Link href="/devnet/new">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default DevNavBar;
