import { useState } from 'react'
import "./home.css";
import { Link } from 'react-router';

function About() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to="/">
        <button>
            &lt; back to home
        </button>
      </Link>
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
