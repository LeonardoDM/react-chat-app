import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Col, Container, Form, FormControl, Image, Row} from 'react-bootstrap'
import './styles.css'
import {Link} from 'react-router-dom'

export default function Login() {
	const [user, setUser] = useState('')

	function handleSubmit(){
		
	}

	return (
		<Container className="login-field">
	    	<Row>
	        	<Col>
		            <Image src="chat-4-128.png" className="user-select-none"/>
		            <h1 className="text-success mb-4">Chat App</h1>
		            <Form onSubmit={handleSubmit}>      
		              <Form.Group controlId="username">
		                <FormControl value={user} size="md" type="text" onChange={event => {setUser(event.target.value)}} placeholder="Insert your username" className="input-size" />
		              </Form.Group>
		              <Link to="/chat"><Button variant="outline-success">Login</Button></Link>
		            </Form>
		        </Col>
	        </Row>
	    </Container>
	)
}