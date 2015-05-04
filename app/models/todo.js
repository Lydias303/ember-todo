import DS from 'ember-data';

var Todo = DS.Model.extend({
  title: DS.attr('string'),
  finished: DS.attr('boolean'),
  priority: DS.attr('boolean')
});

Todo.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: 'Learn',
      finished: false,
      priority: false,
      task: 'lots of stuff'

    }
  ]
});

export default Todo;
