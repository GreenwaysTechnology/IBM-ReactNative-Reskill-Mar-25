import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configureStore,createReducer } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

let initialState = { value: 0 }
const incrementAction = 'counter/increment'
const decrementAction = 'counter/decrement'

const CounterReducer = createReducer(initialState, builder => {
    //biz logic
    builder.addCase(incrementAction, (state, action) => {
        //immer js code directly
        state.value += 1
    }).addCase(decrementAction, (state, action) => {
        //immer js code directly
        state.value -= 1
    }).addDefaultCase((state, action) => { })
})

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
