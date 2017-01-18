/**
 * Created by Wilfredo on 18/01/2017.
 */
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jquery');

const TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('Shoud Exist TodoApp', () => {
    expect(TodoApp).toExpect();
  })
});
