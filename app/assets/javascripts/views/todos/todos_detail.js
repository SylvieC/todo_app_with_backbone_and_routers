SpaApp.Views.TodosDetail = Backbone.View.extend({
  id: "todo-detail",

  template: HandlebarsTemplates['todos/detail'],

  events: {
    "click a": 'showDetails'
  },

  render: function() {
    $(this.el).html(this.template(this.model));
    return this;
  },

  showDetails: function(event) {
    event.preventDefault();
    var path = event.target.pathname;
    SpaApp.router.navigate(path, {
      trigger: true
    });
  }

});