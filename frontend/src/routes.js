import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/Login'
import Chat from './pages/Chat'

export default function Routes(){
	return(
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={(props) => <Login {...props}/>}/>
				<Route path="/chat" component={(props) => <Chat {...props}/>}/>
			</Switch>
		</BrowserRouter>
	)
}