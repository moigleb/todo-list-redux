import React from 'react'
import ButtonPanel from './ButtonPanel'
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList';

const App = () => (
  <div className="container-wrap">
    <AddTodo />
    <ButtonPanel />
    <TodoList />
  </div>
)

export default App;