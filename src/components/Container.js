import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calculator from './Calculator';
import Header from './Header';
import Home from './Home';
import Quote from './Quote';

const Container = () => (
  <div data-testid="container">
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
          <Quote />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default Container;
