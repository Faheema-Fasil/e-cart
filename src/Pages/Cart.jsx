import React from 'react'
import { Button } from 'react-bootstrap'
import Header from '../Components/Header'
import { useSelector } from 'react-redux'

function Cart() {
  const cart=useSelector((state)=>state.cartReducer)
  return (
    <>
     <Header/>

     <div style={{marginTop:"100px"}}>
      {
        cart.length>0?(
          
    <div className="row container">

      <div className="col-lg-7 ms-5">
      <div className="table shadow container mt-5">
        <table className='bg-light w-100'>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          {cart?.map((product,index)=>
        (
           <tr>
            <td>{index+1}</td>
            <td>{product.title}</td>
            <td><img width={"70%"} height={"100px"} src={product.thumbnail} alt="" /></td>
            <td><input type="text" readOnly  value={product.quantity} style={{width:"25px"}}/></td>
            <td className='text-danger'>${product.totalPrice}</td>
            <td>
              <Button className='btn '  variant="primary">
              <i class="fa-solid fa-trash" style={{ "color": "#ffffff" }}></i>
              </Button>
              </td>
          </tr>
        ))}
         
        </table>
      </div>
      </div>

      <div className="col-lg-4 ms-5 ">
        <div className='card shadow rounded mt-5 p-5 w-100'>
          <h2 className='text-primary fw-bolder'>CART SUMMARY</h2>
          <h3 className='mt-4 text-light'> <span className='text-success fw-bolder '>Total Products :</span > 3 </h3>
          <h3 className='text-success'>Total Price : <span className='text-danger fw-bolder'>$1000</span></h3>
        </div>
        <div className="d-grid">
          <Button variant='primary' className='btn mt-4'>Checkout</Button>
        </div>
      </div>

    </div>
        ):
        <div className='text-center'>
          <img width={"400px"} src="https://chocochi.com/static/media/cart-empty.27846abe.gif" alt="" />
          <h1 className='mt-4 text-success'>Your Cart Is Empty...</h1>
        </div>
      }
     </div>
      
    </>
  )
}

export default Cart
