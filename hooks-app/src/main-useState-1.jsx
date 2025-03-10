import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function Counter() {
  //state declaration
  const [counter, setCounter] = useState(0)

  const onIncrement = () => {
    // setCounter(prevState => {
    //   return prevState + 1
    // })
    // setCounter(counter => {
    //   return counter + 1
    // })
    setCounter(counter + 1)
  }

  return <div>
    <h1>Counter App</h1>
    <h2>Counter: {counter}</h2>
    <button onClick={onIncrement}>+</button>
  </div>
}


const App = () => {
  return <Counter />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
