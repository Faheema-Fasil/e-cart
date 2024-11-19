import React from 'react'
import { Badge, Button,Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import {  Link } from 'react-router-dom';
import { searchProduct } from '../Redux/slice/productSlice';

function Header({insideHome}) {
  const dispatch = useDispatch()
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand >
            <Link to="/" style={{textDecoration:"none",fontSize:"30px"}}><i class="fa-solid fa-shop fa-bounce"></i> E-Cart</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* search  */}
          {insideHome&&<Form.Control
              type="text"
              placeholder="Search"
              className='w-25 ms-5'
              onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))}
            />}
            <Nav className="ms-auto">
              <Nav.Link >
                <Link to="/wishlist">
                  <Button variant="primary">
                  <i class="fa-solid fa-heart" style={{"color": "#ffffff"}}></i> Wishlist <Badge bg="secondary">0</Badge>
                  </Button>
                </Link>
              </Nav.Link>
              <Nav.Link >
                <Link to="/cart">
                  <Button variant="primary">
                  <i className="fa-sharp-duotone fa-solid fa-cart-shopping" style={{"--fa-primary-color": "#5b5848", "--fa-secondary-color": "#5b5848"}}></i> Cart <Badge bg="secondary">0</Badge>
                  </Button>
                </Link>
              </Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
