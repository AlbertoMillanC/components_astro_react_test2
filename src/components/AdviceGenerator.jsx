import { useState } from 'react'
import { useEffect } from 'react'


function getAdvice() {
  const url = 'https://jsonplaceholder.typicode.com/todos'  
  const [todos,setTodos] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json() 
    setTodos(responseJSON)

  }
  useEffect (() => {
    fetchApi()
  },[])
  return (
    <div>
      <h1 className="bg-slate-100 text-">GENERADOR </h1>
      <ul>
        
      
      {!todos ? 'cargando...' :
      todos.map((todo,index)=>{
        return <li key={index}>{ todo.id}, {todo.title}, {todo.userId},{todo.body} </li>
      }) }
      </ul>
    </div>
  )
}

export default getAdvice
