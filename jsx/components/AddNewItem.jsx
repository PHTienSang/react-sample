import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { addItem } from '../action/ListAction';
import ItemList from './ItemList';


class AddNewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
    };
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

  render() {
    const { items } = this.props;
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <button
          type="button"
          onClick={() => this.props.dispatch(addItem(this.state.temp))}
        >
          Add
        </button>
        <ItemList itemLists={items} />
      </div>
    );
  }
}

AddNewItem.propsType = {
  items: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = (state) => ({
  items: state.items,
});


// const mapDispatchToProps = (dispatch) => bindActionCreators(
//   {
//     handleSubmit: addItem(this.state.temp),
//   },
//   dispatch,
// );

export default connect(mapStateToProps, null)(AddNewItem);
