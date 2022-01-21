import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <body className="bg-green-100">
      <div className="flex flex-col h-screen">
        <header className="py-5 text-4xl text-left text-black bg-green-500">
          Cookie Stand Admin
        </header>
        <main className="flex-1 p-5 text-center overlow-y-auto">
        <Container style={{backgroundColor: 'lightgreen'}}>
          <b>Create Cookie Stand</b>

        <Form>
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
            <Form.Group className="mb-3" controlId="min_customer">
              <Form.Label>Max Customers per Hour</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            </Col>
            <Col>
            <Form.Group className="mb-3" controlId="min_customer">
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
          </Container><br></br>
        <div className="text-center">
          Report Table Coming Soon...
        </div>
        <Container>
          <p>
           Location: Min: Max: Avg: 
          </p>
        </Container>
        </main>
        <footer className="py-5 text-left text-black bg-green-400">
          <p> &#169; 2022</p>
        </footer>
      </div>
    </body>
  )
}