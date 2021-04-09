import React, {useEffect, useState} from 'react'

export default function Talk({key2, socket}){
	const [chat, setChat] = useState([])

	useEffect(() => {
		socket.on('chat message', (msg) => {
			setChat([...chat, msg])
		})
	})
	if(key2 === 'talk'){
		return chat.map((msg, index) => (
			<div key={index}>
				<h3><span>{msg}</span></h3>
			</div>
		))
	} else{
		return (
			<p id="users">Paulo</p>
		)
	}
	
}