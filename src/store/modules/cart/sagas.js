import { all, takeLatest, put } from 'redux-saga/effects';

import { addToCartRequestSucess } from './actions';

function* addToCart({ id }) {
  console.tron.log(id, 'TO NO SAGA');

  yield put(addToCartRequestSucess(id));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
