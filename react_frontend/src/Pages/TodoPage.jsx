import React,{ useState, useEffect } from 'react'
import Card from '../Components/card'
import Form from '../Components/Form'

export const TodoPage = () =>{
  const [data, setData] = useState([])
  const [addTodo, setAddTodo] = useState('')
 
  const fetchdata = () => {
    fetch("/api").then(response => {
      if (response.ok) {
        return response.json()
      }
    }).then(data => setData(data))
  }

  useEffect(() => {fetchdata()}, [])

  const handleChange = (inputValue) => {
    setAddTodo(inputValue)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/api/create', {
      method: 'POST',
      body: JSON.stringify({
        content: addTodo,
      }),
      headers: {
        'content-type': 'application/json, charset=UTF-8'
      }
    }).then(res => res.json())
      .then(message => {
        console.log(message)
        setAddTodo('')
        fetchdata()
      })
  }

  return (
    <>
      <Form userInput={addTodo} onFormChange={handleChange} onFormSubmit={handleSubmit} />
      <Card listOfTodos={data} />
    </>
  )
}