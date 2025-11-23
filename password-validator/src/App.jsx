import React, { useState } from 'react'
import validator from 'validator'

const App = () => {
  const [errorMessage, setErrorMessage] = useState('')

  const validate = (value) => {
    if (validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minSymbols: 1
    })) {
      setErrorMessage("Is a Strong Password")
    } else {
      setErrorMessage("Is not a Strong Password");
    }
  }

  return (
    <div style={{
      marginLeft: '200px'
    }}>
      <pre>
        <h2>Checking password strength in ReactJS</h2>
        <span>
          Enter Password:
        </span>
        <input type="text"
          onChange={
            (e) => validate(e.target.value)
          } />
        <br />

        {
          errorMessage === '' ? null :
            <span style={{
              fontWidth: 'bold',
              color: 'red'
            }}>
              {errorMessage}
            </span>
        }
      </pre>

    </div>
  )
}

export default App
