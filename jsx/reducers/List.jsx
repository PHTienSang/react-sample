import { COUNTER } from '../action/ListAction';

const INITIAL_STATE = {
  count: 0,
};

function reducer(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case COUNTER:
      return state.count + 1;
    default:
      return state;
  }
}
export default reducer;
