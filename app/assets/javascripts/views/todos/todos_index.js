SpaApp.Views.TodosIndex = Backbone.View.extend({
  id: 'todos',

  template: HandlebarsTemplates['todos/index'],

  events: {
    'click #addTodoWithDescription': 'add'
  },

  render: function() {
    $(this.el).html(this.template());

    var todoView;
    _.each(this.collection, function(someTodo) {
      todoView = new SpaApp.Views.TodosShow({
        model: someTodo
      });
      this.$el.append(todoView.render().el);
    }, this);

    return this;
  },

  add: function(event) {
    event.preventDefault();

    var newTodo = {
      title: $("#todo_title").val(),
      description: $('#todo_description').val(),
      completed: false
    };

    $.ajax({
      type: "POST",
      url: '/todos.json',
      context: this,
      data: {
        todo: newTodo
      }
    }).done(function(todo) {
      var todoView = new SpaApp.Views.TodosShow({
        model: todo
      });
      this.$el.append(todoView.render().el);
      var detailView = new SpaApp.Views.TodosShow({
        model: todo
      });
    });
  }
});