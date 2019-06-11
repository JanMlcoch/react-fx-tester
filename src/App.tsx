import React from 'react'
import './App.css'
import { Trader } from './components/trader/Trader'
import { NavLink, Route, BrowserRouter as Router } from 'react-router-dom'
import { Contact } from './components/contact/Contact'
import TraderCont from './containers/traderCont'

function App() {
	return (
		<Router>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="#">Fx tester</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse"
				        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
				        aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<NavLink to="/" activeClassName="active" className="nav-item nav-link" href="#">Trader <span className="sr-only">(current)</span></NavLink>
						<NavLink to="/contact" activeClassName="active" className="nav-item nav-link" href="#">Contact</NavLink>
					</div>
				</div>
			</nav>
			<div className="app container">
				<Route path="/" exact component={TraderCont} />
				<Route path="/contact/" component={Contact} />
			</div>
		</Router>
	)
}

export default App
