import React, { useState } from 'react';
import ItemList from './ItemList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { countItem } from '../action/ListAction';
import PropTypes from "prop-types";
import { addItem } from '../action/ListAction';

export default class AddNewItem extends Component {
  handleChange(e) {
    this.setState({ temp: e.target.value });
  }

  handleSubmit() {
    const { items, temp } = this.state;
    this.setState(
      {
        items: items.concat(temp),
        temp: '',
      },
    );
  }

  removeItem(index) {
    const { items } = this.state;
    items.splice(index, 1);
    const tmp = [...items];
    this.setState(
      {
        items: tmp,
        temp: '',
      },
    );
  }

  render() {
    const { items, temp } = this.state;
    return (
      <div>
        <input type="text" value={temp} onChange={this.handleChange} />
        <button type="button" onClick={this.handleSubmit}>Add</button>
        <ItemList itemLists={items} removeItem={this.removeItem} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
});


const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    handleSubmit: addItem,
  },
  dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(AddNewItem);
