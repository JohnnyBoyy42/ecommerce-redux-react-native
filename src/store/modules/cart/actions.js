export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartRequestSucess(id) {
  return {
    type: '@cart/ADD_REQUEST_SUCCESS',
    id,
  };
}
