import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import logger from 'redux-logger'

let initialState = { value: 0 }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state, action) {
            //immerjs default
            state.value++
        },
        decrement(state, action) {
            state.value--
        },
        incrementBy(state, action) {
            state.value += action.payload
        }
    }
})
//extract reducers from slice
const CounterReducer = counterSlice.reducer
//extract actions
const { increment, decrement, incrementBy } = counterSlice.actions

const appStore = configureStore({
    reducer: {
        counter: CounterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
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
        dispatch({ type: increment })
    }

    return <div>
        <h1>Count {count.value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: decrement })
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
