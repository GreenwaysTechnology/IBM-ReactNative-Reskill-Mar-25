import { createRoot } from "react-dom/client";

const CardHeader = () => {
    return <h1>CardHeader</h1>
}
const CardLogo = () => {
    return <span>Card Logo</span>
}
const CardDescription = () => {
    return <>
        <p>This is card description</p>
    </>
}
const CardFooter = () => {
    return <section>
        <h2>Card Footer</h2>
    </section>
}

const Card = () => {
    return <div>
        {/* Componsition */}
        <CardHeader />
        <CardLogo />
        <CardDescription />
        <CardFooter />
    </div>
}
const App = () => <Card />


createRoot(document.getElementById('root')).render(<App />)
