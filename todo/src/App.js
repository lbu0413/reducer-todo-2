import React, { useState, useReducer } from 'react'
import logo from './logo.svg';
import './App.css';
import { reducer } from './reducers/index'
import { initialState } from './reducers/index'
import actions from './actions/index'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  const handleAdd = () => {
    dispatch(actions.addTodo())
  }

  return (
    <div className="App">
      {state.map((todo) => {
        return (
          <div>{todo.item}</div>
        )
      })}
      <button type="button" onClick={handleAdd}>Add Todo</button>
    </div>
  );
}

export default App;
