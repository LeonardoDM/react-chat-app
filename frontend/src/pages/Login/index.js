import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Col, Container, Form, FormControl, Image, Row} from 'react-bootstrap'
import './styles.css'
import {Link} from 'react-router-dom'

export default function Login() {
	const [user, setUser] = useState('')
	const [room, setRoom] = useState('')

	return (
		<Container className="login-field">
	    	<Row>
	        	<Col>
		            <Image src="chat-4-128.png" className="user-select-none"/>
		            <h1 className="text-success mb-4">Chat App</h1>
		            <Form>      
		              <Form.Group controlId="username">
		                <FormControl value={user} size="md" type="text" onChange={event => {setUser(event.target.value)}} placeholder="Insert your username" className="input-size" />
		              </Form.Group>
					  <Form.Group>
						<FormControl value={room} size="md" type="text" onChange={event => {setRoom(event.target.value)}} placeholder="Insert room name" className="input-size" />
					  </Form.Group>
					  <Link onClick={e => (!user || !room) ? e.preventDefault() : null} to={`/chat?user=${user}&room=${room}`}>
		              	<Button type="submit" variant="outline-success">Login</Button>
					  </Link>
		            </Form>
		        </Col>
	        </Row>
	    </Container>
	)
}