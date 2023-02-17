import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/articles')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])
  console.log(blogs)

  return (
    <div className="App">
      <div>
        <header className="App-header">
          <h1>all blogs</h1>
          {blogs && blogs.map(blog => (
            <div key={blog.id}>{blog.title}</div>
          ))}
        </header>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
