import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { produce } from 'immer'

class User extends React.Component {

    state = {
        users: [],  // handle actual user data
        isLoading: false, //handle spinner
        error: null
    }

    async componentDidMount() {
        //const url = 'http://localhost:3000/api/users'
        const url = 'https://jsonplaceholder.typicode.com/users'
        try {
            const response = await fetch(url)
            const users = await response.json()
            this.setState(produce(this.state, (draft) => {
                draft.users = users
                draft.isLoading = true
            }))
        }
        catch (err) {
            console.log(err)
            this.setState(produce(this.state, (draft) => {
                draft.error = err
                draft.isLoading = true
            }))
        }
    }

    render() {
        //conditional render
        const { users, isLoading, error } = this.state
        if (error) {
            return <h1>Something went Wrong {error.message}</h1>
        } else if (!isLoading) {
            return <h1>Loading....</h1>
        } else {
            return <ul>
                {
                    users.map(user => {
                        return <li key={user.id}>
                            <span>{user.name} {user.email}</span>
                        </li>
                    })
                }
            </ul>
        }

    }
}


const App = () => {

    return <>
        <User />
    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
