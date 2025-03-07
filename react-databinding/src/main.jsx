import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


// const User = (props) => <>
//     <UserDetils id={props.id}
//         userName={props.userName}
//         status={props.status}
//         imgUrl={props.imgUrl}
//         height={props.height}
//         width={props.width}
//     />
// </>
const User = (props) => <>
    {/* Spread Noation */}
    <UserDetils {...props} />
</>

const Avatar = ({ imgUrl, height, width }) => <img src={imgUrl} height={height}
    width={width} />

const UserDetils = ({ id = 0, userName = "userName", status = false, imgUrl = "https://imgur.com/1bX5QH6.jpg", height = 100, width = 100 }) => <div>
    <Avatar imgUrl={imgUrl} height={height} width={width} />
    <h1>Id : {id}</h1>
    <h2>Name : {userName}</h2>
    <h3>Status : {status ? 'Available' : 'Not Available'}</h3>
</div>

const App = () => {
    const profilePic = 'https://imgur.com/1bX5QH6.jpg'
    return <>
        <User id={1} userName={"Subramanian"} status={true} imgUrl={profilePic} height={100} width={100} />
        <User id={2} userName={"Murugan"} status={true} imgUrl={profilePic} height={100} width={100} />
        <User id={3} userName={"John"} status={false} imgUrl={profilePic} height={100} width={100} />
        <User />
        <User id={30} userName={"XXX"} />

    </>
}


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
