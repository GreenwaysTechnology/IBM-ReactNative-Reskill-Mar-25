import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

class Counter extends React.Component {
    state = {
        incrmentCounter: 0,
        decrementCounter: 100
    }
    render() {
        return <div>
            <h1>Counter App</h1>
            <h2>Increment Value : {this.state.incrmentCounter} Decrement Value : {this.state.decrementCounter}</h2>
            {/* Inline listener */}
            <button onClick={() => {
                this.setState(({ ...this.state, incrmentCounter: this.state.incrmentCounter + 1 }))
            }} >+</button>
                <button onClick={() => {
                this.setState(({ ...this.state, decrementCounter: this.state.decrementCounter - 1 }))
            }} >-</button>
        </div>
    }
}


const App = () => {

    return <>
        <Counter />
    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
