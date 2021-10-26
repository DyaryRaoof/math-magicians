import { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import CalcButton from './CalcButton';
import DisplayButton from './DisplayButton';

const Caculator = () => {
  const [calculator, setCalculator] = useState({ total: null, next: null, operation: '' });

  const performCalculation = (operation) => {
    setCalculator(calculate(calculator, operation));
  };

  const { total, next, operation } = calculator;

  return (
    <div className="calc-container">
      <h1>Lets do some math</h1>
      <div className="calc-wrapper">
        <DisplayButton total={total} next={next} operation={operation} />
        <CalcButton myClass="grey" myClick={performCalculation} myText="AC" />
        <CalcButton myClass="grey" myClick={performCalculation} myText="+/-" />
        <CalcButton myClass="grey" myClick={performCalculation} myText="%" />
        <CalcButton myClass="orange" myClick={performCalculation} myText="÷" />
        <CalcButton myClass="grey" myClick={performCalculation} myText="7" />
        <CalcButton myClass="grey" myClick={performCalculation} myText="8" />
        <CalcButton myClass="grey" myClick={performCalculation} myText="9" />
        <CalcButton myClass="orange" myClick={performCalculation} myText="x" />
        <CalcButton myClass="grey" myClick={performCalculation} myText="4" />
        <CalcButton myClass="grey" myClick={performCalculation} myText="5" />
        <CalcButton myClass="grey" myClick={performCalculation} myText="6" />
        <CalcButton myClass="orange" myClick={performCalculation} myText="-" />
        <CalcButton myClass="grey" myClick={performCalculation} myText="1" />
        <CalcButton myClass="grey" myClick={performCalculation} myText="2" />
        <CalcButton myClass="grey" myClick={performCalculation} myText="3" />
        <CalcButton myClass="orange" myClick={performCalculation} myText="+" />
        <CalcButton myClass="grey" myClick={performCalculation} myText="0" />
        <CalcButton myClass="grey" myClick={performCalculation} myText="." />
        <CalcButton myClass="orange" myClick={performCalculation} myText="=" />
      </div>
    </div>

  );
};

export default Caculator;
