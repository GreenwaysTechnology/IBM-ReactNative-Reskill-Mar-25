import { CardHeader } from "./cardheader"
import { CardLogo } from './cardlogo'
import { CardDescription } from './carddescription'
import { CardFooter } from './cardfooter'

const Card = () => {
    return <div>
        {/* Componsition */}
        <CardHeader />
        <CardLogo />
        <CardDescription />
        <CardFooter />
    </div>
}
export { Card }