import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const User = (id, userName, status) => {
    return <div>
        <h1>Id : {id}</h1>
        <h2>Name : {userName}</h2>
        <h3>Status : {status ? 'Available' : 'Not Available'}</h3>
    </div>
}
const App = () => {
    return User(1, 'Subramanian', true)
}


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
