import DS from 'ember-data';

export default DS.Model.extend({
  artist: DS.attr(),
  collection: DS.belongsTo('collection', {async: true}),
  price: DS.attr(),
  size: DS.attr(),
  title: DS.attr(),
  type: DS.attr(),
  quantity: DS.attr(),
});
