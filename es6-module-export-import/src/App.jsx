import { Suspense } from 'react';
import './App.css'
import Bottles from './components/Bottles/Bottles';


function App() {

  const bottlesPromise = fetch("../public/bottles.json").then(res => res.json());

  return (
    <>
      <h1>Water Bottles</h1>
      <Suspense fallback={<p>Bottles are loading........</p>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
