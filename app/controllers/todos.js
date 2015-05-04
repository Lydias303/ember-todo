import Ember from 'ember';

export default Ember.ArrayController.extend({

  actions: {
    createTodo: function() {
      var title = this.get('newTitle');

      if(!title){return false;}
      if(!title.trim()){return;}

      var todo = this.store.createRecord('todo', {
        title: title,
        finished: false,
        priority: false
      });

      this.set('newTitle', '');
      todo.save();
    }
  },

  remaining: function() {
    return this.filterBy('finished', false).get('length');
  }.property('@each.finished'),

  inflection: function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'tasks' : 'task'
  }.property('remaining')
});
