import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addItem } from '../action/ListAction';
import AddNewItem from '../components/AddNewItem';

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    addItem,
  },
  dispatch,
);

const AddItemContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewItem);
export default AddItemContainer;
