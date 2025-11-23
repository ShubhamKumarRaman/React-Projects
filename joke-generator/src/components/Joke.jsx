import React, { useState } from 'react'
import Button from './Button'

const Joke = () => {

    const [joke, setJoke] = useState('');

    const fetchApi = () => {
        fetch('https://sv443.net/jokeapi/v2/joke/Programming?type=single')
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
    }
    return (
        <div className='m-auto flex flex-col items-center justify-center text-beige'>
            <Button callApi={fetchApi} />
            <p className='text-xl text-white'>{joke}</p>
        </div>
    )
}

export default Joke
