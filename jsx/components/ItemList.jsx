import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NewItemRowContainer from '../containers/NewItemRowContainer';

export default class ItemList extends PureComponent {
  render() {
    const { itemLists } = this.props;
    return (
      <ul>
        {
          itemLists.map((item, idx) => (
            <NewItemRowContainer
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
};
