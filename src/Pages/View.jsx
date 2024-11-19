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
      <div className="container mt-5 row">
        <div className="col-lg-4 mt-5">
          <img width={"100%"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxeH5g4bVSM2f-gSIu28vo1QGQceIr0Qbf6g&s" alt="" />
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-6">
          <p>Pid:1</p>
          <h1>Product Title</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vero atque quam illo maxime dolorum dolores voluptas voluptate, facere sunt dolore nemo unde culpa saepe quidem exercitationem recusandae error cupiditate.</p>
          <h3 className='mt-5'>Price : <span className='text-danger'>$789</span></h3>
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
