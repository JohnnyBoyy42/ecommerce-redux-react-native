// import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_REQUEST_SUCCESS':
      console.tron.log(action.id, 'OLA MUNDO');
      return state;

    default:
      return state;
  }
}
