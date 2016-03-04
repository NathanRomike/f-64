import Ember from 'ember';

export default Ember.Component.extend({

  printPrice: Ember.computed('printPrice', function() {
    return '$' + this.get('print.price');
  }),
});
