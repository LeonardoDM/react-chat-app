import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button, FormControl, InputGroup, Navbar} from 'react-bootstrap'

export default function Chat() {
	return (
		<>
			<Navbar fixed="top">
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
			<Navbar fixed="bottom" className="position-absolute ">
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
		</>
	)
}