import React from 'react';
import PropTypes from 'prop-types';

const NewItemRow = ({ index, value, deleteItem }) => (
  <li>
    {value}
    <button type="button" onClick={() => deleteItem({ index })}>Delete</button>
  </li>
);

NewItemRow.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  deleteItem: PropTypes.func,
};

NewItemRow.defaultProps = {
  deleteItem: () => {},
};

export default NewItemRow;
