import { createRoot } from "react-dom/client";

function Heading() {
    //component defintion
    return <h1>Hello React</h1>
}

createRoot(document.getElementById('root')).render(Heading())

