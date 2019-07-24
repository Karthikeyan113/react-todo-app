import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'
import {deleteTodo, changeEditMode, changeState, updateTodo} from '../actions/todo-actions'

class TodoList extends Component {
  updateTodo = (id, text) => {
    this.props.updateTodo(id, text)
    this.props.changeEditMode(id)
  }
  render() {
    return (
      <>
        <h2 className="heading">TodoList</h2>
        <ul className="flex-container">
          {this.props.todos.filter(todo => !todo.completed).map(todo => (
            <Todo key={todo.id} {...todo}
              deleteTodo = {() => this.props.deleteTodo(todo.id)}
              changeEditMode = {() => this.props.changeEditMode(todo.id)}
              changeState = {() => this.props.changeState(todo.id)}
              updateTodo = {(text) => this.updateTodo(todo.id, text)}
            />
          ))}
        </ul>
        
        <h2 className="heading">Completed TodoList</h2>
        <ul className="flex-container">
          {this.props.todos.filter(todo => todo.completed).map(todo => (
            <Todo key={todo.id} {...todo}
              deleteTodo = {() => this.props.deleteTodo(todo.id)}
              changeEditMode = {() => this.props.changeEditMode(todo.id)}
              changeState = {() => this.props.changeState(todo.id)}
              updateTodo = {(text) => this.updateTodo(todo.id, text)}
            />
          ))}
        </ul> 
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  changeState: (id) => dispatch(changeState(id)),
  changeEditMode: (id) => dispatch(changeEditMode(id)),
  updateTodo: (id, text) => dispatch(updateTodo(id, text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
