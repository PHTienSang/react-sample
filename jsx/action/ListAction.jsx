export const COUNTER = 'COUNTER';
export const ADD_ITEM = 'ADD_ITEM';

export function countItem() {
  return ({ type: COUNTER });
}

export function addItem(text) {
  return {
    type: ADD_ITEM,
    text,
  };
}
