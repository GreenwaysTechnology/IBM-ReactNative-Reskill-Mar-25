import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// const User = (info) => {
//     return <div>
//         <h1>Id : {info.id}</h1>
//         <h2>Name : {info.userName}</h2>
//         <h3>Status : {info.status ? 'Available' : 'Not Available'}</h3>
//     </div>
// }
const User = (props) => {
    console.log(props)
    return <div>
        <h1>Id : {props.id}</h1>
        <h2>Name : {props.userName}</h2>
        <h3>Status : {props.status ? 'Available' : 'Not Available'}</h3>
    </div>
}
const App = () => {
    //all parameters passed as single object which is called property
    return <User id={1} userName={"Subramanian"} status={true} />
}


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
