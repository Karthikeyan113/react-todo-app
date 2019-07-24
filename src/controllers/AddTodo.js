import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTodo } from '../actions/todo-actions'

class AddTodo extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    if(!this.input.value.trim())
      return
    this.props.addTodo(this.input.value)
    this.input.value = ''
  }

  render() {
    return (
      <>
        <h2 className='heading'>Add Todo</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className='form-control' ref={node => (this.input = node)} />
          <button type="submit" className="btn primary">Add</button>
        </form>
      </>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodo(text))
})

export default connect(null, mapDispatchToProps)(AddTodo)
