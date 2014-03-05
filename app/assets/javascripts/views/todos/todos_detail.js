SpaApp.Views.TodosDetail = Backbone.View.extend({
  id: "todo-detail",

  template: HandlebarsTemplates['todos/detail'],

  events: {
    "click a": 'comeBackToRoot'
  },

  render: function() {
    $(this.el).html(this.template(this.model));
    return this;
  },

  comeBackToRoot: function(event) {
    event.preventDefault();
    var path = event.target.pathname;
    SpaApp.router.navigate(path, {
      trigger: true
    });
    $.get("/todos.json").done(function(data) {
      // initialize the index view with the fetched data
      var view = new SpaApp.Views.TodosIndex({
        collection: data
      });
      $('#container').html(view.render().el);
    });


  }

});