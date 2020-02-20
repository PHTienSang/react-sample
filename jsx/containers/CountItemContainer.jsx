import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { countItem } from '../action/ListAction';
import CountItem from '../components/CountItem';

const mapStateToProps = ({ list }) => ({
  count: list.count,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    countItem,
  },
  dispatch,
);

const CountItemContainer = connect(mapStateToProps, mapDispatchToProps)(CountItem);
export default CountItemContainer;
