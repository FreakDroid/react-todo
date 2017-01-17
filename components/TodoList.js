/**
 * Created by Wilfredo on 17/01/2017.
 */
const React = require('react');
const Todo = require('Todo');

const TodoList = React.createClass({
  render: function () {
    let {todos} = this.props;

    let renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    };

    return(
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
