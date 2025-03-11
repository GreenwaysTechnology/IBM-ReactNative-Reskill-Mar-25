import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

//action constants
const incrementAction = 'counter/increment'
const decrementAction = 'counter/decrement'
const incrementByTwo = 'counter/incrementByTwo'

//redux
const CounterReducer = (counter = 0, action) => {
    //biz 
    switch (action.type) {
        case incrementAction:
            return counter + 1
        case decrementAction:
            return counter - 1
        case incrementByTwo:
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
        dispatch({ type: incrementAction })
    }

    return <div>
        <h2>React Redux</h2>
        <h1>Value : {counter}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: decrementAction })
        }}>-</button>
        <button onClick={() => {
            dispatch({ type: incrementByTwo, payload: 2 })
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
