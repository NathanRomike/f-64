import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),

  sortProperties: ['date:desc'],
  sortedPrints: Ember.computed.sort('print', 'sortProperties'),

  sortPropertiesTitle: ['title:desc'],
  sortedCollections: Ember.computed.sort('collection', 'sortPropertiesTitle'),

  model() {
    return this.store.findAll('print');
  },

});
