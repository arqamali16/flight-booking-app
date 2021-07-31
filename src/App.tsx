import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Search from '../src/Pages/Search';
import Login from '../src/Pages/Login';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path='/search' component={Search} />
				<Route path='/' component={Login} />
			</Switch>
		</Router>
	);
};

export default App;
