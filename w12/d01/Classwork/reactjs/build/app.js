var Hello = React.createClass({displayName: "Hello",
  render: function() {
    return (
      React.createElement("h1", null, "Hello, world!")    
    );
  }
})

React.render(
  React.createElement(Hello, null),
  document.getElementById('content')
);