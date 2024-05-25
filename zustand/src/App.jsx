import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import useStore from './store'

function App() {

  const {todos,addTodo}=useStore()
console.log(todos);
  const handleSubmit = (e) => {
    addTodo("new todo")
  }
  return (
<div>
{todos.map((todo)=>(
  <h1>{todo}</h1>
))}
<button onClick={handleSubmit}>Admin</button>
</div>
  )
}

export default App
