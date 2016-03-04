import Ember from 'ember';

export default Ember.Component.extend({
  confirmatonAlert: false,
  collections: [],

  actions: {
    selectCollection(collection) {
      this.set('collection', collection);
    },

    savePrint() {
      var params = {
        collection: this.get('collection'),
        date: this.get('date'),
        price: this.get('price'),
        size: this.get('size'),
        title: this.get('title'),
        type: this.get('type'),
        url: this.get('url'),
        quantity: this.get('quantity')
      };
      this.sendAction('savePrint', params);
      this.set('confirmatonAlert', true);
    }
  }
});
