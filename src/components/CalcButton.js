import { PropTypes } from 'prop-types';

const CalcButton = ({ myClass, myClick, myText }) => (
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

CalcButton.propTypes = {
  myClick: PropTypes.func.isRequired,
  myClass: PropTypes.string.isRequired,
  myText: PropTypes.string.isRequired,
};

export default CalcButton;
