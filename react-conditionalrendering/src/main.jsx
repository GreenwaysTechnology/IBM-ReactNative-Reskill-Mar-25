import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const Hello = () => <h1>Hello</h1>
const Hai = () => <h1>Hai</h1>

// const Greet = () => {
//   const isValid = false
//   if (isValid) {
//     return <Hello />
//   }
//   return <Hai />

// }
const Greet = () => {
  const isValid = true
  return isValid ? <Hello /> : <Hai />
}

const App = () => {
  return <>
    <Greet />
  </>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
