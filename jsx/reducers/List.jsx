import { handleActions } from 'redux-actions';
import {
  countItem,
  addItem,
  deleteItem,
} from '../action/ListAction';

const initialState = {
  count: 0,
  items: [],
};

const reducer = handleActions(
  {
    [countItem]: (state) => (
      {
        ...state,
        count: state.count + 1,
      }),
  },
  initialState,
);
export default reducer;
