import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// const User = (props) => {
//     const { id, userName, status } = props
//     return <div>
//         <h1>Id : {id}</h1>
//         <h2>Name : {userName}</h2>
//         <h3>Status : {status ? 'Available' : 'Not Available'}</h3>
//     </div>
// }
const User = ({ id, userName, status }) => <div>
    <h1>Id : {id}</h1>
    <h2>Name : {userName}</h2>
    <h3>Status : {status ? 'Available' : 'Not Available'}</h3>
</div>

const App = () => {
    //all parameters passed as single object which is called property
    return <User id={1} userName={"Subramanian"} status={true} />
}


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
