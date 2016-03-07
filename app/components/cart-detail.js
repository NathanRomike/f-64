import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  printPrice: Ember.computed('printPrice', function() {
    console.log(this.get('shoppingCart'));
    console.log(this.get('shoppingCart').get('print'));
    // return
    // '$' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }),
});
