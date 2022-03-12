import React,{ useState, useEffect } from 'react'

export default function App() {
  const [data, setData] = useState([])
 
  console.log('---==', data)
  useEffect(() => {
    fetch("/members")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result.members)
        },
        (error) => { setData([]) }
    )
  })
  return (
    <div className='App'>
      {(typeof data === 'undefined') ? (
        <span>Loading......</span>
        ) : (
          data.forEach((member) => <span>{member}</span>)
      )}
    </div>
  )
}
