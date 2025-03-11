import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

//redux
const CounterReducer = (count = { value: 10 }, action) => {
    //biz logic
    switch (action.type) {
        case 'counter/increment':
            //immutable logic//pure function
            return { ...count, value: count.value + 1 }
        case 'counter/incrementBy':
            //immutable logic//pure function
            return { ...count, value: count.value + action.payload }

        case 'counter/decrement':
            //immutable logic//pure function
            return { ...count, value: count.value - 1 }
        default:
            return count; //default state
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
    const count = useSelector(state => {
        //appState.reducerName
        return state.counter
    })
    const dispatch = useDispatch()

    const onIncrement = () => {
        //dispatching action to reducer
        dispatch({ type: 'counter/increment' })
    }

    return <div>
        <h1>Count {count.value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: 'counter/decrement' })
        }}>-</button>

        <button onClick={() => {
            dispatch({ type: 'counter/incrementBy', payload: 2 })
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
