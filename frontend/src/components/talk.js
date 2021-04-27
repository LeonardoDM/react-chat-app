import React, {useEffect, useState} from 'react'

export default function Talk({key2, socket}){
	const [chat, setChat] = useState([])
	const [users, setUsers] = useState([])

	useEffect(() => {
		socket.on('chat message', ({username, msg}) => {
			setChat([...chat, [username, msg]])
		})
		socket.on('show usernames', (username) => {
			setUsers([...users, username])
		})
	})
	if(key2 === 'talk'){
		return chat.map(([username, msg], index) => (
			<div key={index}>
				<h5><span>{username}</span></h5>
				<h3><span>{msg}</span></h3>
			</div>
		))
	} else{
		return users.map((username, index) => (
			<div key={index}>
				<h5><span>{username}</span></h5>
			</div>
		))
	}
}