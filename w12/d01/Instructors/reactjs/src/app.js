var Todos = new Backbone.Collection()

var Hello = React.createClass({
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
      <div id="container">
        <h1 onClick={this.shmee}>
          To-Do List - Monkeys and Bananas! { this.state.date.toString() }
        </h1>
        <form onSubmit={this.formSubmitted}>
          <input type="text" name="todo" placeholder="Xavier Does stuff" />
          <button>Add</button>
        </form>
      </div>
    );
  }
});

var List = React.createClass({
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
        <li>{t.get('todo')}</li>
      );
    });
    return (
      <ul>
        {lis}
      </ul>
    )
  }
})

React.render(
  <div>
    < Hello />
    < List />
  </div>,
  document.getElementById('content')
);