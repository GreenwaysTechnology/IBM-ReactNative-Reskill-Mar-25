import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const Subject = (props) => {

  const { courses } = props
  //render
  return <ul>
    {
      courses.map(course => {
        return <li>{course}</li>
      })
    }
  </ul>

}

const App = () => {
  const courses = ['React', 'ReactNative', 'Javascript', 'Mobile', 'Devops', 'Cloud']
  return <Subject courses={courses} />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
