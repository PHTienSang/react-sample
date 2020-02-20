import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../action/ListAction';
import AddNewItem from '../components/AddNewItem';

const mapStateToProps = ({ list }) => ({
  items: list.items,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    addItem,
  },
  dispatch,
);

const AddNewItemContainer = connect(mapStateToProps, mapDispatchToProps)(AddNewItem);
export default AddNewItemContainer;
