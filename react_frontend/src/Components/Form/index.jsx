import React from 'react'

const index = ({ userInput, onFormChange, onFormSubmit }) => {
  
  return (
    <>
      <form onSubmit={(e) => onFormSubmit(e)}>
        <input type="text" required value={userInput} onChange={(e) => onFormChange(e.target.value)} />
        <input type="submit" />
      </form>
    </>
  )
}

export default index
