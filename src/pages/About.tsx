import { useState } from 'react'
import "./home.css";

function About() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>🔥🔥🔥🔥🔥🔥</h1>
      <h1>ABOUT PAGE</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default About
