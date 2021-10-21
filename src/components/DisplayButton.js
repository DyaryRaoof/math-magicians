import React from 'react';
import { PropTypes } from 'prop-types';

class DisplayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showCorrectValue() {
    const { calculator } = this.props;
    console.log(calculator);

    if (!calculator.total && !calculator.operation && !calculator.next) {
      return 0;
    }
    return `${calculator.total ? calculator.total : ''} ${
      calculator.operation ? calculator.operation : ''
    } ${calculator.next ? calculator.next : ''} `;
  }

  render() {
    return (
      <button type="button" className="grey">
        {this.showCorrectValue()}
      </button>
    );
  }
}

DisplayButton.propTypes = {
  calculator: PropTypes.node.isRequired,
};

export default DisplayButton;
