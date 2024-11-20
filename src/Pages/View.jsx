import { Button } from 'react-bootstrap'
import Header from '../Components/Header'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function View() {
  const {id}=useParams()    //can handle path related infprmations from components
  const[product,setProduct]=useState({})

  useEffect(() => {
    
    if(localStorage.getItem("allProducts")){
      const allProducts=JSON.parse(localStorage.getItem("allProducts"))
      setProduct(allProducts.find(item => item.id==id))
    }else{
      setProduct('')
    }
  }, [])
  console.log(product);
  
  
  return (
    <>
     <Header/>
      <div className="container  row" style={{marginTop:'150px'}}>
        <div className="col-lg-4 ">
          <img width={"100%"} src={product?.thumbnail} alt="" />
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-6">
          <p>Pid: {product?.id}</p>
          <h1>{product?.title}</h1>
          <p>{product?.description}</p>
          <h3 className='mt-5'>Price : <span className='text-danger'>${product?.price}</span></h3>
          <div className="d-flex justify-content-between mt-5">
            <Button variant="primary">
              <i class="fa-solid fa-heart" style={{ "color": "#ffffff" }}></i> Wishlist
            </Button>
            <Button variant="primary">
              <i className="fa-sharp-duotone fa-solid fa-cart-shopping" style={{ "--fa-primary-color": "#5b5848", "--fa-secondary-color": "#5b5848" }}></i> Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default View
