import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  classNames: ['print-tile'],
  showDescription: false,
  moreButton: true,

  printPrice: Ember.computed('printPrice', function() {
    return '$' + this.get('print.price');
  }),

  actions: {
    add(print) {
      this.get('shoppingCart').add(print);
    },

    showDescription() {
      this.set('showDescription', true);
      this.set('moreButton', false);
    },

    hideDescription() {
      this.set('showDescription', false);
      this.set('moreButton', true);
    }
  }
});
