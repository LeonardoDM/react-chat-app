import React, {useEffect, useState} from 'react'

export default function Talk({msg, socket}){
	const [chat, setChat] = useState([])

	useEffect(() => {
		socket.on('chat message', (msg) => {
			setChat([...chat, msg])
		})
	})
	
	return chat.map((msg, index) => (
		<div key={index}>
			<h3><span>{msg}</span></h3>
		</div>
	))
}