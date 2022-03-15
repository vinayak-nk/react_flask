import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { TodoPage, Show } from './Pages/TodoPage'
import './App.css'

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<TodoPage />} />
          <Route path='/:id' element={<Show />} />
        </Routes>
      </BrowserRouter>
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
