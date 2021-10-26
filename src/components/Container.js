import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calculator from './Calculator';
import Header from './Header';
import Home from './Home';
import Qoute from './Quote';

const Container = () => (
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

export default Container;
