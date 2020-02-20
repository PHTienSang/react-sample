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
      const { items } = state.items;
      alert(items);
      // items.splice(index, 1);
      // const tmp = [...items];
      return {
        ...state,
        items,
      };
    },
  },
  initialState,
);
export default reducer;
