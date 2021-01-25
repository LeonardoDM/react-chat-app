import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Card, Container, Col, FormControl, InputGroup, Nav, Row} from 'react-bootstrap'

export default function Chat() {
	
	return (
		<>
			<Container>
				<Row>
					<Col>
						<Card bg="light" border="light" className="card-height">
							<Card.Header>
								<Nav variant="tabs" defaultActiveKey="#index" className="nav-fill">
							      <Nav.Item>
							        <Nav.Link href="#index">
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
							        <Nav.Link href="#users">Users Online</Nav.Link>
							      </Nav.Item>
							    </Nav>
							</Card.Header>
							<Card.Body className="chat-box">
								<p>texto</p>
								<p>texto</p>
								<p>texto</p>
							</Card.Body>
							<Card.Footer>
								<InputGroup className="my-2">
									<FormControl
								      placeholder="Type your message..."
								      aria-label="Type your message..."
								      aria-describedby="basic-addon2"
								    />
								    <InputGroup.Append>
								      <Button variant="outline-success">></Button>
								    </InputGroup.Append>
								</InputGroup>
							</Card.Footer>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	)
}