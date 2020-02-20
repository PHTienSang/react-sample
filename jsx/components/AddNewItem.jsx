import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ItemList from './ItemList';


const AddNewItem = ({ items, addItem }) => {
  const [value, setText] = useState('');
  return (
    <div>
      <input type="text" value={value} onChange={(e) => setText(e.target.value)} />
      <button
        type="button"
        onClick={() => addItem({ value })}
      >
        Add
      </button>
      <ItemList itemLists={items} />
    </div>
  );
};

AddNewItem.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  addItem: PropTypes.func,
};

AddNewItem.defaultProps = {
  items: [],
  addItem: () => {},
};

export default AddNewItem;
