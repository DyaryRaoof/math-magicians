import './App.css';
import React from 'react';
import Container from './components/Container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container />
    );
  }
}

export default App;
