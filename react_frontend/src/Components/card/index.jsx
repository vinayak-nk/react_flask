import React from 'react'

const index = ({ listOfTodos }) => {
  return (
    <>
      {listOfTodos.map(todo => {
        return (
          <ul key={todo.id}>
            <li>{todo.content}</li>
          </ul>
        )
      })}
    </>
  )
}

export default index
