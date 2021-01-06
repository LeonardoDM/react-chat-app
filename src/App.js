import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Container, Form, FormControl, Image, Row} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container className="login-field">
        <Row>
          <Col>
            <Image src="chat-4-128.png"/>
            <h1 className="text-success mb-4">Chat App</h1>
            <Form>      
              <Form.Group controlId="username">
                <FormControl size="lg" type="text" placeholder="Insert your username" className="input-size" />
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
