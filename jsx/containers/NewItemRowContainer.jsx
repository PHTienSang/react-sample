import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteItem } from '../action/ListAction';
import NewItemRow from '../components/NewItemRow';

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    deleteItem,
  },
  dispatch,
);

const NewItemRowContainer = connect(null, mapDispatchToProps)(NewItemRow);
export default NewItemRowContainer;
