import React from 'react'
import './App.css'
import {Trader} from './components/trader/Trader'
import {NavLink, Route, BrowserRouter as Router} from 'react-router-dom'
import {User} from './components/user/User';
import {themes, ThemeContext, Theme} from './utils/ThemedProvider';
import {ThemedButton} from './components/themedButton/ThemedButton';

interface AppState {
  theme: Theme;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      theme: themes.light,
    };
  }

  toggleTheme = () => {
    this.setState((state: AppState) => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Fx tester</a>
            <button
              className="navbar-toggler"
              type="button" data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
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
            <ThemedButton onClick={this.toggleTheme} />
            <Route path="/" exact component={Trader}/>
            <Route path="/user/" component={User}/>
          </div>
        </Router>
      </ThemeContext.Provider>
    )
  }

}

export default App
