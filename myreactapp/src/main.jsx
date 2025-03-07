// import React, { Fragment } from "react";
import { createRoot } from "react-dom/client";


// const Heading = () => {
//     return <React.Fragment>
//         <h1>Hello</h1>
//         <p>This is react</p>
//     </React.Fragment>
// }
// const Heading = () => {
//     return <Fragment>
//         <h1>Hello</h1>
//         <p>This is react</p>
//     </Fragment>
// }
const Heading = () => {
    return <>
        <h1>Hello</h1>
        <p>This is react</p>
    </>
}

createRoot(document.getElementById('root')).render(<Heading />)
