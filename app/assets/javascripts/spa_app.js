window.SpaApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    // this code obviously belongs in a model or collection
    // but, we're not talking about models or collections just yet :)
    $.get("/todos.json").done(function(data) {
      // initialize the index view with the fetched data
      var view = new SpaApp.Views.TodosIndex({
        collection: data
      });
      $('#container').html(view.render().el);
    });
    this.router = new this.Routers.Main();
    Backbone.history.start({
      pushState: true
    });
  }
};

SpaApp.Routers.Main = Backbone.Router.extend({

  routes: {
    " ": "index",
    "todos/:id": "showDescription"
  },
  // var router = new SpaApp.Routers.Main();
  // Backbone.history.start({
  //   pushState: true
  // });

  index: function() {
    $.get("/todos.json").done(function(data) {
      var view = new SpaApp.Views.TodosIndex({
        collection: data
      });
      $('#container').html(view.render().el);
    });
  },


  showDescription: function(id) {
    $.get("/todos/" + id + ".json").done(function(data) {
      var view = new SpaApp.Views.TodosShow({
        model: data
      });
      $('#container').html(view.render().el);
    });
  }
});


$(document).ready(function() {
  SpaApp.initialize();
});