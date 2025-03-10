import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//parent component
class Counter extends React.Component {
    state = {
        counter: 0
    }
    onIncrement = () => {
        this.setState(({ ...this.state, counter: this.state.counter + 1 }))
    }
    render() {
        return <CounterDisplay counter={this.state.counter} onIncrement={this.onIncrement} />
    }
}

//child component
const CounterDisplay = (props) => {
    return <div>
        <h1>Counter App</h1>
        <h2>Value : {props.counter}</h2>
        <button onClick={props.onIncrement} >+</button>
    </div>
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
