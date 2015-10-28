import Ember from 'ember';

export function capitalize([word], hash) {
  return word.toUpperCase();
}

export default Ember.Helper.helper(capitalize);
