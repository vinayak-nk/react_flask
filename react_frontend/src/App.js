import React from 'react'
import { TodoPage } from './Pages/TodoPage'


export default function App() {
  return (
    <div className='App'>
      <TodoPage />
    </div>
  )
}

// export default function App() {
//   const [data, setData] = useState([])
 
//   console.log('---==', data)
//   useEffect(() => {
//     fetch("/members")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setData(result.members)
//         },
//         (error) => { setData([]) }
//     )
//   })
//   return (
//     <div className='App'>
//       {(typeof data === 'undefined') ? (
//         <span>Loading......</span>
//         ) : (
//           data.forEach((member) => <span>{member}</span>)
//       )}
//     </div>
//   )
// }
