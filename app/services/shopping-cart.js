import Ember from 'ember';

export default Ember.Service.extend({
  prints: [],

  add(print) {
    this.get('prints').pushObject(print);
    // alert(print.get('name') + ' added to your donations.');
  },
});
