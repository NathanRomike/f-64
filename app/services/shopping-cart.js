import Ember from 'ember';

export default Ember.Service.extend({
  prints: [],

  add(print) {
    this.get('prints').pushObject(print);
    console.log("I got to the shopping cart");
  }
});
