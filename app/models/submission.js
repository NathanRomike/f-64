import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  bio: DS.attr(),
  description: DS.attr(),
  coverImgUrl: DS.attr(),
  addImgs: DS.attr()
});
