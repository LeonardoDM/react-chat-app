import React, {useState} from 'react'
import io from 'socket.io-client'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card, Container, Col, Form, FormControl, InputGroup, Nav, Row} from 'react-bootstrap'
import Talk from '../../components/talk'
const socket = io('http://localhost:3333')

export default function Chat(props) {
	const [key, setKey] = useState('talk')
	const [msg, setMsg] = useState('')
	console.log(props)
	const username = props.location.state

	socket.on('connection', () => {
		console.log('connected to backend')
	})

	function handleSubmit(event){
		event.preventDefault()
		if(msg !== ''){
			socket.emit('chat message', msg)
			setMsg('')
		}
	}
	
	return (
		<Container>
			<Row>
				<Col>
					<Card bg="light" border="light" className="card-height">
						<Card.Header>
							<Nav variant="tabs" defaultActiveKey="talk" className="nav-fill">
						      <Nav.Item>
						        <Nav.Link eventKey="talk" onClick={() => {setKey('talk')}}>
						        	<img
								        alt=""
								        src="/chat-4-128.png"
								        width="25"
								        height="25"
								      />{' '}
								      Chat App
						        </Nav.Link>
						      </Nav.Item>
						      <Nav.Item>
						        <Nav.Link eventKey="users" onClick={() => {setKey('users')}}>Users Online</Nav.Link>
						      </Nav.Item>
						    </Nav>
						</Card.Header>
						<Card.Body className="chat-box">
							<Talk key2={key} socket={socket} username={username}/>
						</Card.Body>
						<Card.Footer>
							<Form onSubmit={handleSubmit}>
								<InputGroup className="my-2">
									<FormControl
								      value={msg}
									  onChange={event => {setMsg(event.target.value)}}
									  placeholder="Type your message..."
								      aria-label="Type your message..."
								      aria-describedby="basic-addon2"
								    />
								    <InputGroup.Append>
								      <Button variant="outline-success" type="submit">⮞</Button>
								    </InputGroup.Append>
								</InputGroup>
							</Form>
						</Card.Footer>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}