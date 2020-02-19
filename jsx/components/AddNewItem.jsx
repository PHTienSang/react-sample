import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addItem, deleteItem } from '../action/ListAction';
import ItemList from './ItemList';


class AddNewItem extends Component {
  constructor(props) {
    super(props);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ temp: e.target.value });
  }

  // removeItem(index) {
  //   const { items } = this.state;
  //   items.splice(index, 1);
  //   const tmp = [...items];
  //   this.setState(
  //     {
  //       items: tmp,
  //       temp: '',
  //     },
  //   );
  // }
  // handleRemoveItem(index) {
  //   this.props.dispatch(deleteItem(index));
  // }

  handleAddItem() {
    const { temp } = this.state;
    this.props.dispatch(addItem(temp));
  }

  render() {
    const { items } = this.props;
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <button
          type="button"
          onClick={this.handleAddItem}
        >
          Add
        </button>
        <ItemList itemLists={items} />
      </div>
    );
  }
}

AddNewItem.propTypes = {
  items: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  items: state.items,
});

export default connect(mapStateToProps, null)(AddNewItem);
