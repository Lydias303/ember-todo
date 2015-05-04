import Ember from 'ember';

export default Ember.ArrayController.extend({

  actions: {
    createTodo: function() {
      var title = this.get('newTitle');

      if(!title){return false;}
      if(!title.trim()){ return; }

      var todo = this.store.createRecord('todo', {
        title: title,
        finished: false,
        priority: false
      });

      this.set('newTitle', '');
      todo.save();
    },

    clearCompleted: function() {
      var completed = this.filterBy('finished', true);
      completed.invoke('deleteRecord');
      completed.invoke('save');
    }
  },

  hasCompleted: function() {
    this.get('completed') > 0;
  }.property('completed'),

  allAreDone: function(key, value) {
    if (value === undefined) {
    } else {
      this.setEach('finished', value);
      this.invoke('save');
      return value;
    }
    return !!this.get('length') && this.isEvery('finished');
  }.property('@each.finished'),

  completed:  function() {
      this.filterBy('finished', true).get('length');
  }.property('@each.finished'),

  remaining: function() {
    return this.filterBy('finished', false).get('length');
  }.property('@each.finished'),

  inflection: function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'task' : 'tasks';
  }.property('remaining')
});
