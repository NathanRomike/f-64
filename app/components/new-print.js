import Ember from 'ember';

export default Ember.Component.extend({
  confirmatonAlert: false,
  collections: [],

  actions: {
    savePrint() {
      var params = {
        name: this.get('name'),
        email: this.get('email'),
        bio: this.get('bio'),
        description: this.get('description'),
        coverImgUrl: this.get('coverImgUrl'),
        addImgs: this.get('addImgs'),
        artFormat: this.get('artFormat')
      };
      this.sendAction('savePrint', params);
      this.set('confirmatonAlert', true);
    }
  }
});
