export const COUNTER = 'COUNTER';
export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export function countItem() {
  return ({ type: COUNTER });
}

export function addItem(text) {
  return {
    type: ADD_ITEM,
    value: text,
  };
}

export function deleteItem(index) {
  return {
    type: DELETE_ITEM,
    id: index,
  };
}
