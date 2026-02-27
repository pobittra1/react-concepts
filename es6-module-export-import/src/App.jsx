import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { add, divide as div, mult, subs } from './utils/math/math'

function App() {
  const [count, setCount] = useState(0)

  //get the math functions from another file by using es6 export import.
  const addition = add(1, 2);
  const different = subs(5, 3);
  const multiplication = mult(7, 8);
  const division = div(45, 9);
  // get addition, different return func using import. name again of divide func as div.
  console.log(addition, different, multiplication, division);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
