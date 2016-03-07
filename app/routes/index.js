import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),

  sortProperties: ['date:desc'],
  sortedPrints: Ember.computed.sort('print', 'sortProperties'),

  model() {
    return this.store.findAll('print');
  },

});
