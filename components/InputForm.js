import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'
import { useState } from 'react'

export default function InputForm() {

  // const hours_operation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
  // const [totalStoreData, setStoreData] = useState([])

  // function handleInput(e) {
  //   e.preventDefault();

  //   const [location, min_customer, max_customer, avg_customer] = e.target

  //   dailyTotal = 0

  //   const hourlySales = hours_operation.map(time => {
  //     const randCustomer = Math.floor(Math.random() * (max_customer.value - min_customer.value)) + min_customer.value
  //     const cookies_sold = randCustomer * avg_customer.value

  //     dailyTotal = dailyTotal + cookies_sold
  //     return cookies_sold
  //   })
    
  //   const storeData = { "location": location.value, "hourlySales":hourlySales, "dailyTotal":dailyTotal,}

  //   setStoreData([...totalStoreData, storeData])
  // }

    return (
        <Container style={{backgroundColor: 'lightgreen'}}>
          <b>Create Cookie Stand</b>

        <Form >
          <Row>
            <Form.Group className="mb-3" controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter location" />
            </Form.Group>
          </Row>
          <Row>
            <Col>
            <Form.Group className="mb-3" controlId="min_customer">
              <Form.Label>Min Customers per Hour</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="max_customer">
              <Form.Label>Max Customers per Hour</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="avg_cookies">
              <Form.Label>Avg Cookies Per Sale</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            </Col>
            <Col>
            <Button variant="success" type="submit" size="lg">
              Create
            </Button>
            </Col>
            </Row>
          </Form>
          </Container>
    )
} 