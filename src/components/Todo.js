import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: props.text
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    const inputValue = e.target.value
    this.setState((state) => ({
      inputValue
    }))
  }

  render(){
    return(
      <div>
        <input type="checkbox"
          checked={this.props.completed}
          onChange={this.props.changeState}
        />
        <input type="text" value={this.state.inputValue}
          disabled={!this.props.editMode}
          onChange={this.handleChange}
          style={{
            textDecoration: this.props.completed ? 'line-through' : 'none'
          }}
        />
        <button className={this.props.editMode ? 'hide' : ''} onClick={this.props.changeEditMode}>Edit</button>
        <button className={!this.props.editMode ? 'hide' : ''} onClick={() => this.props.updateTodo(this.state.inputValue)}>Save</button>
        <button className="danger" onClick={this.props.deleteTodo}>Delete</button>
      </div>
    )
  }
  
}

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  editMode: PropTypes.bool.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  changeState: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
}

export default Todo
