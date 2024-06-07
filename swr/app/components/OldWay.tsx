"use client"
import { useEffect, useState } from "react"

interface Todo {
    userId: number
    id: number
    title: string
    completed: boolean
}

export default function OldWay() {
const [todo,setTodo] = useState<Todo[]>([])

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setTodo(json)) 
},[])

if(todo.length === 0) return <div>Loading...</div>


  return (
    <div className="p-20 min-h-screen">
        {todo && todo.map((item)=>(
            <li key={item?.id}>{item?.title}</li>
        ))}
    </div>
  )
}
