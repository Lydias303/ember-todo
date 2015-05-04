import Ember from 'ember';

export default Ember.ObjectController.extend({
  finished: function(key, value) {
    var model = this.get('model');

    if (value == undefined) {
      return model.get('finished');
    } else {
      model.set('finished', value);
      model.save();
      return value;
    }
  }.property('model.finished')
});
