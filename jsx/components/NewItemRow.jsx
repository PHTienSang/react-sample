import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from '../action/ListAction';

class NewItemRow extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
  }

  handleDeleteButton() {
    const { index } = this.props;
    this.props.dispatch(deleteItem(index));
  }

  render() {
    const { value } = this.props;
    return (
      <li>
        {value}
        <button type="button" onClick={this.handleDeleteButton}>Delete</button>
      </li>
    );
  }
}

NewItemRow.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default connect(null, null)(NewItemRow);
