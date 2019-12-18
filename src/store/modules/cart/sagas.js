import { all, takeLatest, put } from 'redux-saga/effects';
import NavigationService from '../../../services/navigation';

import { addToCartRequestSucess } from './actions';

function* addToCart({ id }) {
  console.tron.log(id, 'TO NO SAGA');

  yield put(addToCartRequestSucess(id));

  NavigationService.navigate('Cart');
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
