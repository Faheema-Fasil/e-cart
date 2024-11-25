import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../Redux/slice/wishListSlice'

function Wishlist() {
  const{wishlist}=useSelector(state=>state.wishListReducer)
const dispatch = useDispatch()
  return (
    <>
     <Header/>
      <div style={{ marginTop: "50px" }} className='container-fluid'>
       <Row> 
       {
        wishlist?.length>0?wishlist.map(product=>(
          <Col>
          <Card style={{ width: '18rem' ,marginTop:"50px" }}>
          <Card.Img variant="top" src={product?.thumbnail} />
          <Card.Body>
            <Card.Title>{product?.title.slice(0,10)}...</Card.Title>
            <Card.Text>
             {product?.description.slice(0,20)}...
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Button variant="primary" onClick={()=>dispatch(removeFromWishlist(product?.id))}> <i class="fa-solid fa-trash" style={{ "color": "#ffffff" }}></i></Button>
              <Button variant="primary"><i className="fa-sharp-duotone fa-solid fa-cart-plus" style={{ "--fa-primary-color": "#5b5848", "--fa-secondary-color": "#5b5848" }}></i></Button>
            </div>

          </Card.Body>
        </Card>
        </Col>
        )): <div className='text-center'>
          <img width={"400px"} src="https://chocochi.com/static/media/cart-empty.27846abe.gif" alt="" />
          <h1 className='mt-4 text-success'>Your Wishlist Is Empty...</h1>
        </div>
        }
       </Row>
      </div>
    </>
  )
}

export default Wishlist
