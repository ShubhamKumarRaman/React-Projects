import React from 'react'

const Button = (props) => {
    return (

        <button
            className='inline-block px-5 py-2.5 bg-[#5ca00d] text-white cursor-pointer rounded-lg transition-colors duration-500 hover:bg-[#c1f590] active:bg-[#297910]'
            onClick={props.callApi}>
            Click to generate a joke
        </button>

    )
}

export default Button
