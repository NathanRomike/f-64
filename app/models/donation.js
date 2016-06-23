import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr(),
  artistId: DS.attr(),
  amount: DS.attr()
});
