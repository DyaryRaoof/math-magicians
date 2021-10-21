import { PropTypes } from 'prop-types';

const DisplayButton = ({ total, next, operation }) => {
  const showCorrectValue = () => {
    if (!total && !operation && !next) {
      return 0;
    }
    return `${total || ''} ${operation || ''} ${next || ''} `;
  };

  return (
    <button type="button" className="grey">
      {showCorrectValue()}
    </button>
  );
};

DisplayButton.propTypes = {
  total: PropTypes.string,
  operation: PropTypes.string,
  next: PropTypes.string,
};

DisplayButton.defaultProps = {
  total: '0',
  operation: null,
  next: null,
};

export default DisplayButton;
