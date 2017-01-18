/**
 * Created by Wilfredo on 18/01/2017.
 */
const React = require('react');

const AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    let todoText = this.refs.todoText.value;
    if(todoText){
      this.refs.todoText.value = "";
      this.props.onAddTodo(todoText)
    }else{
      this.refs.todoText.focus();
    }
  },


  render: function(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="What do you need to do?"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;