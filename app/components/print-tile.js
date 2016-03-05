import Ember from 'ember';

export default Ember.Component.extend({
  showDescription: false,
  moreButton: true,

  printPrice: Ember.computed('printPrice', function() {
    return '$' + this.get('print.price');
  }),

  actions: {
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
