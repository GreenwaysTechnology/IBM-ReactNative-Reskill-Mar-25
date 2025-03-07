import { createRoot } from "react-dom/client";

const heading = () => {
    return <div>
          <h1>Hello</h1>
        <p>This is react</p>
    </div>
}

createRoot(document.getElementById('root')).render(<heading />)
