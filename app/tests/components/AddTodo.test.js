/**
 * Created by Wilfredo on 18/01/2017.
 */
/**
 * Created by Wilfredo on 18/01/2017.
 */
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const AddTodo = require('AddTodo');

describe('AddTodo', () => {
  it('Shoud Exist', () => {
    expect(AddTodo).toExpect();
  });

    it('should call AddTodo pop with valid Data', ()=>{
      const todoText = 'Check email';
      let spy = expect.createSpy();
      let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={apy}/>);
      let $el = $(ReactDOM.findDOMNode(addTodo));
      addTodo.refs.todoText.value = todoText;
      TestUtils.simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(todoText);
    });

  it('should not call AddTodo pop with invalid valid Data', ()=>{
    const todoText = '';
    let spy = expect.createSpy();
    let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={apy}/>);
    let $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = todoText;
    TestUtils.simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
