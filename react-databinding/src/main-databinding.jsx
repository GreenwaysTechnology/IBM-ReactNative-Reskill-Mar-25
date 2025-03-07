import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//data binding
const User = () => {
  //declare variables
  const id = 1
  const userName = 'Subramanian'
  const status = true

  return <div>
    <h1>Id : {id}</h1>
    <h2>Name : {userName}</h2>
    <h3>Status : {status ? 'Available' : 'Not Available'}</h3>
  </div>
}
const App = ()=><User/>


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
