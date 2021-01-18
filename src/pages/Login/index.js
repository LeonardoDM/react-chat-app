import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Col, Container, Form, FormControl, Image, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Login() {
	return (
		<Container className="login-field">
	    	<Row>
	        	<Col>
		            <Image src="chat-4-128.png" className="user-select-none"/>
		            <h1 className="text-success mb-4">Chat App</h1>
		            <Form>      
		              <Form.Group controlId="username">
		                <FormControl size="lg" type="text" placeholder="Insert your username" className="input-size" />
		              </Form.Group>
		              <Link to="/chat"><Button variant="outline-success">Login</Button></Link>
		            </Form>
		        </Col>
	        </Row>
	    </Container>
	)
}