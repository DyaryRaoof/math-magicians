import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import CalcButton from './CalcButton';
import DisplayButton from './DisplayButton';

class Caculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { calculator: { total: 0, next: 0, operation: '' } };
  }

  performCalculation = (operation) => {
    this.setState((state) => ({
      calculator: calculate(state.calculator, operation),
    }));
  };

  render() {
    const { calculator } = this.state;
    return (
      <div className="calc-wrapper">
        <DisplayButton calculator={calculator} />
        <CalcButton myClass="grey" myClick={this.performCalculation} myText="AC" />
        <CalcButton myClass="grey" myClick={this.performCalculation} myText="+/-" />
        <CalcButton myClass="grey" myClick={this.performCalculation} myText="%" />
        <CalcButton myClass="orange" myClick={this.performCalculation} myText="÷" />
        <CalcButton myClass="grey" myClick={this.performCalculation} myText="7" />
        <CalcButton myClass="grey" myClick={this.performCalculation} myText="8" />
        <CalcButton myClass="grey" myClick={this.performCalculation} myText="9" />
        <CalcButton myClass="orange" myClick={this.performCalculation} myText="x" />
        <CalcButton myClass="grey" myClick={this.performCalculation} myText="4" />
        <CalcButton myClass="grey" myClick={this.performCalculation} myText="5" />
        <CalcButton myClass="grey" myClick={this.performCalculation} myText="6" />
        <CalcButton myClass="orange" myClick={this.performCalculation} myText="-" />
        <CalcButton myClass="grey" myClick={this.performCalculation} myText="1" />
        <CalcButton myClass="grey" myClick={this.performCalculation} myText="2" />
        <CalcButton myClass="grey" myClick={this.performCalculation} myText="3" />
        <CalcButton myClass="orange" myClick={this.performCalculation} myText="+" />
        <CalcButton myClass="grey" myClick={this.performCalculation} myText="0" />
        <CalcButton myClass="grey" myClick={this.performCalculation} myText="." />
        <CalcButton myClass="orange" myClick={this.performCalculation} myText="=" />
      </div>
    );
  }
}

export default Caculator;
