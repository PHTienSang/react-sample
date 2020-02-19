import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NewItemRow from './NewItemRow';

export default class ItemList extends PureComponent {
  render() {
    const { itemLists } = this.props;
    return (
      <ul>
        {
          itemLists.map((item, idx) => (
            <NewItemRow
              index={idx}
              key={idx}
              value={item}
            />
          ))
        }
      </ul>
    );
  }
}

ItemList.propTypes = {
  itemLists: PropTypes.arrayOf.isRequired,
  // removeItem: PropTypes.func.isRequired,
};
