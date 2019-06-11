import React from 'react'
import './App.css'
import {NavLink, Route, BrowserRouter as Router} from 'react-router-dom'
import {TraderCont} from './containers/traderCont';
import {User} from './components/user/User';
import {changeRate} from './actions';
import {connect} from 'react-redux';

interface AppProps {
  dispatch: any
}

class App extends React.Component<AppProps> {
  intervalId: any;

  componentDidMount(): void {
    this.updateActualPrice();
    this.intervalId = setInterval(() => {
      this.updateActualPrice()
    }, 5000)
  }

  fetchActualRate = (): Promise<number | undefined> => {
    return new Promise(resolve => {
      // fetch('https://cors.io/?https://www.freeforexapi.com/api/live?pairs=EURUSD')
      fetch('https://api.exchangeratesapi.io/latest?symbols=USD')
        .then(function (response) {
          return response.json()
        })
        .then((res) => {
          // const rate = res.rates.EURUSD.rate;
          const rate = res.rates.USD;
          // const makeItFunny = 0
          const makeItFunny = (Math.random() - 0.5) / 100;
          resolve(rate + makeItFunny)
        })
        .catch(() => {
          resolve(undefined)
        })
    })
  };

  updateActualPrice = async (): Promise<void> => {
    const actualPrice = await this.fetchActualRate();
    if (actualPrice) {
      this.props.dispatch(changeRate(actualPrice))
    }
  };

  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand">Fx tester</span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                to="/"
                activeClassName="active"
                className="nav-item nav-link"
                href="#"
              >
                Trader
              </NavLink>
              <NavLink
                to="/user"
                activeClassName="active"
                className="nav-item nav-link"
                href="#"
              >
                User
              </NavLink>
            </div>
          </div>
        </nav>
        <div className="app container">
          <Route path="/" exact component={TraderCont}/>
          <Route path="/contact/" component={User}/>
        </div>
      </Router>
    )
  }

  componentWillUnmount(): void {
    clearInterval(this.intervalId)
  }
}

export default connect()(App)
