import DS from 'ember-data';

export default DS.Model.extend({
  collection: DS.belongsTo('collection', {async: true}),
  date: DS.attr(),
  price: DS.attr(),
  size: DS.attr(),
  title: DS.attr(),
  type: DS.attr(),
  url: DS.attr(),
  quantity: DS.attr(),
});
