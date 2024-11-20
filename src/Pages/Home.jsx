import React, { useEffect } from 'react'
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../Redux/slice/productSlice'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Home() {
const dispatch = useDispatch()
const {allproducts,loading,error}=useSelector(state=>state.productReducer)
useEffect(() => {
  dispatch(fetchProducts())
}, [])
  return (
   <>
    <Header insideHome/>
    <div style={{marginTop:"50px"}} className='container-fluid'>
     {
      loading? <div className='text-center mt-5'>
           <Spinner animation="border" variant="success" />
      </div>:
      <Row>
        {
          allproducts?.length>0?allproducts.map(product =>(
            <Col  key={product?.id}>
             <Card style={{ width: '18rem',margin:"20px" }} className="m-3" >
       <Link to={`/view/${product?.id}`}>
       <Card.Img variant="top" className='bg-success' src={product?.thumbnail} />
       </Link>
      <Card.Body>
        <Card.Title>{product?.title.slice(0,10)}...</Card.Title>
        <Card.Text>
         {product?.description.slice(0,20)}...
        </Card.Text>
        <div className="d-flex justify-content-between">
        <Button variant="primary"> <i class="fa-solid fa-heart" style={{"color": "#ffffff"}}></i></Button>
        <Button variant="primary"><i className="fa-sharp-duotone fa-solid fa-cart-shopping" style={{"--fa-primary-color": "#5b5848", "--fa-secondary-color": "#5b5848"}}></i></Button>
        </div>
       
      </Card.Body>
    </Card>
            </Col>
           ) ): <p className='text-danger'>Nothing to display</p>
        }
      </Row>
      
     }
    </div>

   </>
  )
}

export default Home
