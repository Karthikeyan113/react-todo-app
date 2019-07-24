import React from 'react';
import './App.css';
import TodoList from './controllers/TodoList'
import AddTodo from './controllers/AddTodo'

function App() {
  return (
    <div className="App">
      <div className='container'>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
