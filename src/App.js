import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Home from './components/Home';
import Qoute from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/calculator">
              <Calculator />
            </Route>
            <Route exact path="/quote">
              <Qoute />
            </Route>
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
