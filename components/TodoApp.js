/**
 * Created by Wilfredo on 17/01/2017.
 */

const React = require('react');
const TodoList = require('TodoList');

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [{
        id: 1,
        text: 'Test Wilfredo'
      }, {
        id: 2,
        text: 'Test Wilfredo 2'
      }, {
        id: 3,
        text: 'Test Wilfredo 3'
      }, {
        id: 3,
        text: 'Test Wilfredo 3'
      }]
    }
  },

  render: function(){
    let {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;


