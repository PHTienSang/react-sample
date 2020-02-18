import { COUNTER } from '../action/ListAction';

const INITIAL_STATE = {
  count: 0,
};

function handleChange(state, change) {
  const { count } = state;
  return ({
    count: count + change,
  });
}

export default function reducer(state = INITIAL_STATE, action) {
  // const { count } = state;
  switch (action.type) {
    case COUNTER:
      return handleChange(state, 1);
    default:
      return state;
  }
}
