import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, Container, Col, FormControl, InputGroup, Navbar, Row} from 'react-bootstrap'

export default function Chat() {
	return (
		<>
			<Navbar>
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
			</Navbar>
			<Container fluid>
				<Row>
					<Col sm={4}>Users Online</Col>
					<Col sm={8}>
						<Row>
							<Col xl={12}>
								<div className="overflow-auto chat-area">
								text
								</div>
							</Col>
							<Col className="px-0">
								<Navbar>
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
								</Navbar>
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	)
}