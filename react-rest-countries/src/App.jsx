import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'

const countriesUrl = "https://openapi.programming-hero.com/api/all";

// just get the promise from this api
const countriesPromise = fetch(countriesUrl).then(res => res.json());

function App() {


  return (
    <>
      <Suspense fallback={<p>Loading Countries here.....</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
