import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Form, FormControl, Row} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Form className="form">      
              <Form.Group controlId="username">
                <Form.Label>Chat App</Form.Label>
                <FormControl type="text" placeholder="Insert your username" className="input-size" />
              </Form.Group>
              <Button variant="outline-success">Login</Button>     
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
