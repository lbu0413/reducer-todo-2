import React, { useState, useReducer } from 'react'
import logo from './logo.svg';
import './App.css';
import { reducer } from './reducers/index'
import { initialState } from './reducers/index'


function App() {

  const [state, dispatch] = useReducer(reducer, initialState)
  const [todoText, setTodoText] = useState("")

  console.log(state)

  const addTodo = (e) => {
    e.preventDefault()
    dispatch({ type: "ADD", payload: todoText })
    setTodoText("")
  }

  const handleChange = (e) => {
    setTodoText(e.target.value)
  }

  return (
    <div className="App">
      {state.map((todo, index) => {
        return <div key={index} onClick={() => {
          dispatch({ type: "COMPLETED", payload: index})
        }}>{todo.item}</div>
      })}
      <form onSubmit={addTodo}>
        <input 
          type="text"
          name="todo"
          value={todoText}
          onChange={handleChange}
        />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default App;
