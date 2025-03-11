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
const IncrementReducer = (counter = 0, action) => {
    //biz 
    switch (action.type) {
        case incrementAction:
            return counter + 1
        default:
            return counter
    }
}
const DecrementReducer = (counter = 10, action) => {
    //biz 
    switch (action.type) {
        case decrementAction:
            return counter - 1
        default:
            return counter
    }
}

const IncrementByTwoReducer = (counter = 0, action) => {
    //biz 
    switch (action.type) {
        case incrementByTwo:
            return counter + action.payload
        default:
            return counter
    }
}

const appStore = configureStore({
    reducer: {
        increment: IncrementReducer,
        decrement: DecrementReducer,
        incrementByTwo: IncrementByTwoReducer
    }
})

//react component
const IncrementComponent = () => {
    //Get state from Redux
    const counter = useSelector(state => {
        //appState.reducerName
        return state.increment
    })
    const dispatch = useDispatch()

    const onIncrement = () => {
        //dispatching action to reducer
        dispatch({ type: incrementAction })
    }

    return <div>
        <h2>Increment</h2>
        <h1>Value : {counter}</h1>
        <button onClick={onIncrement}>+</button>
    </div>
}

const DecrementComponent = () => {
    //Get state from Redux
    const counter = useSelector(state => {
        //appState.reducerName
        return state.decrement
    })
    const dispatch = useDispatch()

    const onIncrement = () => {
        //dispatching action to reducer
        dispatch({ type: decrementAction })
    }

    return <div>
        <h2>Decrement</h2>
        <h1>Value : {counter}</h1>
        <button onClick={() => {
            dispatch({ type: decrementAction })
        }}>-</button>

    </div>
}

const IncrementByTwoComponent = () => {
    //Get state from Redux
    const counter = useSelector(state => {
        //appState.reducerName
        return state.incrementByTwo
    })
    const dispatch = useDispatch()
    return <div>
        <h2>IncrementByTwo</h2>
        <h1>Value : {counter}</h1>
        <button onClick={() => {
            dispatch({ type: incrementByTwo, payload: 2 })
        }}>IncrementByTwo</button>
    </div>
}




const App = () => {
    return <Provider store={appStore}>
        <IncrementComponent/>
        <DecrementComponent/>
        <IncrementByTwoComponent />
    </Provider>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
