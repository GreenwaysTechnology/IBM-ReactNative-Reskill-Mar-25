import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


const Post = props => {
    //inital data with some sample posts
    const [posts, setPosts] = useState([
        { id: 1, title: 'Post 1', body: 'this is firstPost' },
        { id: 2, title: 'Post 2', body: 'this is secondPost' }
    ])

    //to handle forms
    const [form, setForm] = useState({ title: '', body: '', id: null })

    //to handle submit button either add or update
    const [isEditing, setIsEditing] = useState(false)

    
    const updatePost = () => {
        setPosts(posts.map(post => (post.id === form.id ? form : post)));
        setForm({ title: '', body: '', id: null })
        setIsEditing(false)
    }
    const addPost = () => {
        const newPost = { id: Date.now(), title: form.title, body: form.body }
        setPosts([...posts, newPost])
        //reset form
        setForm({ title: '', body: '', id: null })
    }

    //listeners
    const handleSubmit = e => {
        e.preventDefault()
        isEditing ? updatePost() : addPost()
    }

    const handleEdit = post => {
        setForm({ title: post.title, body: post.body, id: post.id })
        setIsEditing(true)
    }

    const deletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id))
    }

    return <div>
        <h1>React CURD Application using Plain Array</h1>
        {/* Form to add new Post */}
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    value={form.title}
                    required
                    onChange={e => setForm({ ...form, title: e.target.value })}
                />
            </div>
            <div>
                <textarea
                    placeholder="Body"
                    value={form.body}
                    required
                    onChange={e => setForm({ ...form, body: e.target.value })}
                />
            </div>
            <div>
                <button type="submit">{isEditing ? 'Update' : 'Add'} Post</button>
            </div>
        </form>

        {/* List of posts */}
        <ul>
            {
                posts.map(post => {
                    return <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <button onClick={() => {
                            handleEdit(post)
                        }} >Edit</button>
                        <button onClick={() => {
                            deletePost(post.id)
                        }} >Delete</button>
                    </li>
                })
            }
        </ul>
    </div>
}

const App = () => {
    return <Post />
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
