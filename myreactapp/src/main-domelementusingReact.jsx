import { createRoot } from "react-dom/client";

//DOM element declaration
const Heading = <h1>Hello React!</h1>

//insert into root node <div id=root>

createRoot(document.getElementById('root')).render(Heading)

