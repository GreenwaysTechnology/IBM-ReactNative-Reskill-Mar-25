import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

class Counter extends React.Component {

    state = {
        counter: 0 //inital state
    }

    //event listener
    onIncrement = () => {
        //pure function
        this.setState((prevState) => {
            //write pure function
            // return {
            //     counter: prevState.counter + 1
            // }
            // return Object.assign({}, prevState, { counter: prevState.counter + 1 })
            return { ...prevState, counter: prevState.counter + 1 }
        })
    }

    render() {
        console.log('render is called')
        return <div>
            <h1>Counter App</h1>
            <h2>Value : {this.state.counter}</h2>
            <button onClick={this.onIncrement} >+</button>
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
