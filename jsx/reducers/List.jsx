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
    [addItem]: (state, { payload: { value } }) => (
      {
        ...state,
        items: state.items.concat(value),
      }),
    [deleteItem]: (state, { payload: { index } }) => {
      const temp = state.items;
      temp.splice(index, 1);
      const newArr = [...temp];
      return {
        ...state,
        items: newArr,
      };
    },
  },
  initialState,
);
export default reducer;
