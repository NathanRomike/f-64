import DS from 'ember-data';

export default DS.Model.extend({
  artist: DS.attr(),
  description: DS.attr(),
  name: DS.attr(),
  prints: DS.hasMany('print', {async: true})
});
