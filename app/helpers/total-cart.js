import Ember from 'ember';

export function totalCart(params) {
  if (params[0] === undefined) {
    return "0";
  }
  var grandTotal = 0;
  for (var i = 0; i < params[0].length; i++) {
    grandTotal += 1;
  }
  return grandTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default Ember.Helper.helper(totalCart);
