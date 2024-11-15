import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div style={{marginTop:"50px"}} className='container-fluid'>
      <Card style={{ width: '18rem' }}>
       <Link to="/view/:id">
       <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxeH5g4bVSM2f-gSIu28vo1QGQceIr0Qbf6g&s" />
       </Link>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="d-flex justify-content-between">
        <Button variant="primary"> <i class="fa-solid fa-heart" style={{"color": "#ffffff"}}></i></Button>
        <Button variant="primary"><i className="fa-sharp-duotone fa-solid fa-cart-shopping" style={{"--fa-primary-color": "#5b5848", "--fa-secondary-color": "#5b5848"}}></i></Button>
        </div>
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default Home
