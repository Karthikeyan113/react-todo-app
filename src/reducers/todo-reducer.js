import { intialState } from '../store/initial-state'
import { ADD_TODO,
  CHANGE_EDIT_MODE,
  CHANGE_STATE,
  DELETE_TODO,
  UPDATE_TODO } from '../constants/action-contants'

const todos = (state=intialState.todos, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
          editMode: false
        }
      ]
    
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    
    case CHANGE_EDIT_MODE:
      return state.map(todo => {
          if(todo.id === action.id) {
            return {
              ...todo,
              editMode: !todo.editMode
            }
          }
          return todo
      })
    
      case CHANGE_STATE:
          return state.map(todo => {
              if(todo.id === action.id) {
                return {
                  ...todo,
                  completed: !todo.completed
                }
              }
              return todo
          })
    
      case UPDATE_TODO:
          return state.map(todo => {
              if(todo.id === action.id) {
                return {
                  ...todo,
                  text: action.text
                }
              }
              return todo
          })
    
    default:
      return state
  }
}

export default todos
