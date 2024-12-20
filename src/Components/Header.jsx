import React, { useEffect, useState } from 'react'
import { Badge, Button,Form } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import {  Link } from 'react-router-dom';
import { searchProduct } from '../Redux/slice/productSlice';

function Header({insideHome}) {
  const dispatch = useDispatch()
  const{wishlist}=useSelector(state=>state.wishListReducer)
  const[wishlistCount,setWishlistCount]=useState(0)
  const[cartCount,setCartCount]=useState(0)
  const cart= useSelector((state)=>state.cartReducer)


  useEffect(() => {
   setWishlistCount(wishlist.length)
   setCartCount(cart.length)
  }, [wishlist,cart])
  return (
    <>
      <Navbar expand="lg" className="border-bottom border-1 border-success">
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
                  <i class="fa-solid fa-heart" style={{"color": "#ffffff"}}></i> Wishlist <Badge bg="secondary">{wishlistCount}</Badge>
                  </Button>
                </Link>
              </Nav.Link>
              <Nav.Link >
                <Link to="/cart">
                  <Button variant="primary">
                  <i className="fa-sharp-duotone fa-solid fa-cart-shopping" style={{"--fa-primary-color": "#5b5848", "--fa-secondary-color": "#5b5848"}}></i> Cart <Badge bg="secondary">{cartCount}</Badge>
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
