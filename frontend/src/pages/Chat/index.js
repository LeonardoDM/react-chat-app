import React, {useState} from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card, Container, Col, Form, FormControl, InputGroup, Nav, Row} from 'react-bootstrap'
import Users from '../../components/users'
import Talk from '../../components/talk'

export default function Chat() {
	const [key, setKey] = useState('talk')

	async function handleSubmit(event){
		event.preventDefault()
	}
	
	return (
		<Container>
			<Row>
				<Col>
					<Card bg="light" border="light" className="card-height">
						<Card.Header>
							<Nav variant="tabs" defaultActiveKey="talk" className="nav-fill">
						      <Nav.Item>
						        <Nav.Link eventKey="talk" onClick={event => {setKey('talk')}}>
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
						        <Nav.Link eventKey="users" onClick={event => {setKey('users')}}>Users Online</Nav.Link>
						      </Nav.Item>
						    </Nav>
						</Card.Header>
						<Card.Body className="chat-box">
							{key === 'talk' ? <Talk /> : <Users />}
						</Card.Body>
						<Card.Footer>
							<Form onSubmit={handleSubmit}>
								<InputGroup className="my-2">
									<FormControl
								      placeholder="Type your message..."
								      aria-label="Type your message..."
								      aria-describedby="basic-addon2"
								    />
								    <InputGroup.Append>
								      <Button variant="outline-success" type="submit">></Button>
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