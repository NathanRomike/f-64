import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),

  sortProperties: ['date:desc'],
  sortedPrintByDate: Ember.computed.sort('print', 'sortProperties'),

  sortPropertiesTitle: ['title:desc'],
  sortedByCollections: Ember.computed.sort('collection', 'sortPropertiesTitle'),

  model() {
    return this.store.findAll('print');
  },

});
