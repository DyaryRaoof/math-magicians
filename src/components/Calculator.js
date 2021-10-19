import React from 'react';
import './Calculator.css';

class Caculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calc-wrapper">
        <span className="grey">0</span>
        <span className="grey">A/C</span>
        <span className="grey">+/-</span>
        <span className="grey">%</span>
        <span className="orange">÷</span>
        <span className="grey">7</span>
        <span className="grey">8</span>
        <span className="grey">9</span>
        <span className="orange">x</span>
        <span className="grey">4</span>
        <span className="grey">5</span>
        <span className="grey">6</span>
        <span className="orange">-</span>
        <span className="grey">1</span>
        <span className="grey">2</span>
        <span className="grey">3</span>
        <span className="orange">+</span>
        <span className="grey">0</span>
        <span className="grey">.</span>
        <span className="orange">=</span>
      </div>
    );
  }
}

export default Caculator;
