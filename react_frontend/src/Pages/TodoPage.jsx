import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";

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

  const handleDelete = (e, id) => {
    e.preventDefault()
    fetch(`/api/${id}`, {
      method: 'DELETE',
      header: { 'content-type': 'application/json, charset=UTF-8' },
      body: JSON.stringify({ id }),
    }).then(res => res.json()).then(message => {
      console.log('message==', message)
      fetchdata()
    })
  }

  return (
    <>
      <Form userInput={addTodo} onFormChange={handleChange} onFormSubmit={handleSubmit} />
      <Card listOfTodos={data} handleDelete={handleDelete} />
    </>
  )
}

export const Show = () => {
  const [todo, setTodo] = useState([])
  const { id } = useParams()

  const fetchdata = () => {
    fetch(`/api/${id}`).then(response => {
      if (response.ok) {
        return response.json()
      }
    }).then(data => setTodo(data))
  }
  useEffect(() => {fetchdata()}, [id])

  return (
    <>
      {todo.length > 0 && todo.map(data => <div key={id} >{data.content}</div>)}
    </>
  )
}