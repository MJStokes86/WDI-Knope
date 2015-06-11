var Todos = new Backbone.Collection()

var Hello = React.createClass({displayName: "Hello",
  formSubmitted: function(event) {
    event.preventDefault();
    var form = event.target;
    var todo = form.elements["todo"].value;
    Todos.add({todo: todo});
  },

  shmee: function() {
    console.log("WOAAAH")
  },

  cheeseMaker: function () {
    return "CHEESE"
  },

  getInitialState: function() {
    return { date: new Date() };
  },

  // just like `initialize` in Backbone
  componentDidMount: function() {
    setInterval(function() {
      this.setState({date: new Date()});
    }.bind(this), 1000)
  },

  render: function() {
    return (
      React.createElement("div", {id: "container"}, 
        React.createElement("h1", {onClick: this.shmee}, 
          "To-Do List - Monkeys and Bananas! ",  this.state.date.toString() 
        ), 
        React.createElement("form", {onSubmit: this.formSubmitted}, 
          React.createElement("input", {type: "text", name: "todo", placeholder: "Xavier Does stuff"}), 
          React.createElement("button", null, "Add")
        )
      )
    );
  }
});

var List = React.createClass({displayName: "List",
  getInitialState: function() {
    return { todos: Todos }
  },

  componentDidMount: function() {
    Todos.on('add', function() {
      this.setState({todos: Todos})
    }.bind(this))
  },

  render: function() {
    var lis = this.state.todos.map(function(t) {
      return(
        React.createElement("li", null, t.get('todo'))
      );
    });
    return (
      React.createElement("ul", null, 
        lis
      )
    )
  }
})

React.render(
  React.createElement("div", null, 
    React.createElement(Hello, null), 
    React.createElement(List, null)
  ),
  document.getElementById('content')
);