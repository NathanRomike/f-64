import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  classNames: ['tile'],
  showDescription: false,
  moreButton: true,

  printPrice: Ember.computed('printPrice', function() {
    return '$' + this.get('print.price').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }),

  formatDescription: Ember.computed('formatDescription', function() {
    var description = this.get('print.collection.description');
    return Ember.String.htmlSafe(description.replace(/#p\b/g, `<br><br>`));
  }),

  formatBio: Ember.computed('formatBio', function() {
    var bio = this.get('print.bio');
    return Ember.String.htmlSafe(bio.replace(/#p\b/g, `<br><br>`));
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
