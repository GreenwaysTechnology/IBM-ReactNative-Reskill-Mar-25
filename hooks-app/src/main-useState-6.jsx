import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { produce } from "immer"

const Counter = props => {
    const [counter, setCounter] = useState({ increment: 0, decrement: 100 })

    return <div>
        <h1>Increment {counter.increment} Decrement {counter.decrement}</h1>
        <button onClick={() => {
            // setCounter(({ ...counter, increment: counter.increment + 1 }))
            setCounter(produce(counter, draft => {
                draft.increment += 1
            }))

        }}>+</button>
        <button onClick={() => {
            // setCounter(({ ...counter, decrement: counter.decrement - 1 }))
            setCounter(produce(counter, draft => {
                draft.decrement -= 1
            }))
        }}>-</button>


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
