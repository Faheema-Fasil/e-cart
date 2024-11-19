import React from 'react'
import { Button } from 'react-bootstrap'
import Header from '../Components/Header'

function Cart() {
  return (
    <>
     <Header/>
    <div className="row container">

      <div className="col-lg-7 ms-5">
      <div className="table shadow container mt-5">
        <table className='bg-light w-100'>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Product</td>
            <td><img width={"70%"} height={"200px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxeH5g4bVSM2f-gSIu28vo1QGQceIr0Qbf6g&s" alt="" /></td>
            <td className='text-danger'>$7789</td>
            <td>
              <Button className='btn '  variant="primary">
              <i class="fa-solid fa-trash" style={{ "color": "#ffffff" }}></i>
              </Button>
              </td>
          </tr>
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
      
    </>
  )
}

export default Cart
