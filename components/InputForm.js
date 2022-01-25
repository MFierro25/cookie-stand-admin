import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap'
// import useResource from '../hooks/useResource'
import { useAuth } from '../contexts/auth'

export default function InputForm() {

  //   const { user } = useAuth();
  //   const { createResource } = useResource();

  // function handleSubmit(e) {
  //     e.preventDefault();
  //     const info = {
  //       location: e.target.location.value,
  //       min_customer: parseInt(e.target.min_customer.value),
  //       max_customer: parseInt(e.target.max_customer.value),
  //       avg_cookies: parseInt(e.target.avg_cookies.value),
  //       owner: user.id
  //     };
  //     createResource(info);
  //   }

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