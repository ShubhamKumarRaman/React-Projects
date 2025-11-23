import React from 'react'
import Joke from './components/Joke'

const App = () => {
  return (
    <div className='bg-[rgb(47,97,80)]'>
      <h1 className='text-center text-white font-bold'>Joke Generator using React and Joke API</h1>
      <Joke/>
    </div>
  )
}

export default App
