import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Col, FormControl, InputGroup, Navbar, Row} from 'react-bootstrap'

export default function Chat() {
	
	return (
		<>
			<Navbar fixed="top" className="mb-2">
			    <Container>
				    <Navbar.Brand>
				      <img
				        alt=""
				        src="/chat-4-128.png"
				        width="35"
				        height="35"
				        className="d-inline-block align-top"
				      />{' '}
				      Chat App
				    </Navbar.Brand>
				</Container>
			</Navbar>
			<Container className="container-height">
				<Row>
					<Col >
						<div>
						https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
						</div>
							
					</Col>
				</Row>
			</Container>
			<Navbar fixed="bottom">
			    <Container>
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
				</Container>
			</Navbar>
		</>
	)
}