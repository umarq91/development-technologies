
import { useState } from 'react'
import './App.css'
import UserRegistrationForm from './UserRegistrationForm'
import SimpleForm from './SimpleForm'

function App() {
  const [count, setCount] = useState(0)

  return (
  //  <UserRegistrationForm/>
    <SimpleForm/>
)
}

export default App
