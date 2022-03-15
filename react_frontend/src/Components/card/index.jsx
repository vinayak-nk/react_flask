import React from 'react'
import { Link } from 'react-router-dom'

const index = ({ listOfTodos, handleDelete }) => {
  return (
    <>
      {listOfTodos.map(todo => {
        return (
          <ul key={todo.id}>
            <li className='list-item'>
              <Link to={`${todo.id}`}>  
                {todo.content}
              </Link>
              <span style={{ marginLeft: '100px' }} onClick={(e) => handleDelete(e, todo.id)} >
                Delete
              </span>
            </li>
          </ul>
        )
      })}
    </>
  )
}

export default index
