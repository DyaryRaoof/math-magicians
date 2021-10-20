import React from 'react';
import { PropTypes } from 'prop-types';

class CalcButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { myClass, myClick, myText } = this.props;
    return (
      <button
        type="button"
        className={myClass}
        onClick={() => {
          myClick(myText);
        }}
      >
        {myText}
      </button>
    );
  }
}

CalcButton.propTypes = {
  myClick: PropTypes.func.isRequired,
  myClass: PropTypes.string.isRequired,
  myText: PropTypes.string.isRequired,
};

export default CalcButton;
