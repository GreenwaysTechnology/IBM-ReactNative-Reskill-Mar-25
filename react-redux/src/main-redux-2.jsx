import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

//redux
const CounterReducer = (counter = 0, action) => {
    //biz 
    switch (action.type) {
        case "counter/increment":
            return counter + 1
        case "counter/decrement":
            return counter - 1
        case "counter/incrementByTwo":
            return counter + action.payload
        default:
            return counter
    }
}
//
const appStore = configureStore({
    reducer: {
        counter: CounterReducer
    }
})

//react component
const Counter = () => {
    //Get state from Redux
    const counter = useSelector(state => {
        //appState.reducerName
        return state.counter
    })
    const dispatch = useDispatch()

    const onIncrement = () => {
        //dispatching action to reducer
        dispatch({ type: 'counter/increment' })
    }

    return <div>
        <h2>React Redux</h2>
        <h1>Value : {counter}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: 'counter/decrement' })
        }}>-</button>
        <button onClick={() => {
            dispatch({ type: 'counter/incrementByTwo', payload: 2 })
        }}>IncrementByTwo</button>
    </div>
}


const App = () => {
    return <Provider store={appStore}>
        <Counter />
    </Provider>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
