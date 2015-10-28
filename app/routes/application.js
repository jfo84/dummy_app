import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return { message: 'hello' };
  }
});

const Person = Ember.Object.extend({
  fullName: Ember.computed('firstName', 'lastName', function() {
    return html`${this.get('firstName')} ${this.get('lastName')}`;
  })
});
