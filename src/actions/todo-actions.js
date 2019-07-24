import { ADD_TODO,
      CHANGE_EDIT_MODE,
      CHANGE_STATE,
      DELETE_TODO,
      UPDATE_TODO
    } from '../constants/action-contants'

let nextTodoId = 0

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export const changeEditMode = id => ({
  type: CHANGE_EDIT_MODE,
  id
})

export const changeState = id => ({
  type: CHANGE_STATE,
  id
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
})

export const updateTodo = (id, text) => ({
  type: UPDATE_TODO,
  id,
  text
})
