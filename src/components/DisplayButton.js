import React from 'react';
import { PropTypes } from 'prop-types';

class DisplayButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showCorrectValue() {
    const { calculator } = this.props;
    if (calculator.next) {
      return calculator.next;
    }
    if (calculator.total) {
      return calculator.total;
    }
    return 0;
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
