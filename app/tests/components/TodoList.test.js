/**
 * Created by Wilfredo on 18/01/2017.
 */
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const TodoList = require('TodoList');

const Todo = require('Todo');

describe('TodoList', () => {
  it('Shoud Exist', () => {
    expect(TodoList).toExpect();
  });

  it('should render one Todo component for each todo item', () => {
    let todos = [{
      id: 1,
      text: 'Testing'
    },
      {
        id: 2,
        text: 'Second Test'
      }];

    let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);

    let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, TodoList);

    expect(todosComponents.length).toBe(todos.length);
  });
});
