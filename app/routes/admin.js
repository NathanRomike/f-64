import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('collection');
  },

  actions: {
    saveCollection(params) {
      var newCollection = this.store.createRecord('collection', params);
      newCollection.save();
    },

    savePrint(params) {
      var newPrint = this.store.createRecord('print', params);
      newPrint.save();
    }
  }
});
