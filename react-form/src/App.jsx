import React, { useState } from 'react'

const App = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [gender, setGender] = useState('male')
  const [subjects, setSubjects] = useState({
    dbms: true,
    c: false,
    cpp: false,
    java: false,
    python: false,
    dsa: false
  })

  return (
    <div className="App">
      <h1>Form in react</h1>
      <fieldset>
        <form action="#" method='get'>

          {/* First name */}
          <label htmlFor="firstname">
            First Name
          </label>
          <input
            type="text"
            name='firstname'
            id='firstname'
            value={firstName}
            onChange={(e) =>
              setFirstName(e.target.value)
            }
            placeholder='Enter First name'
            required
          />

          {/* Last name */}
          <label for="lastName">Last Name</label>
          <input
            type="text"
            name='lastname'
            id='lastname'
            value={lastName}
            onChange={(e) =>
              setLastName(e.target.value)
            }
            placeholder='Enter last name'
            required
          />

          {/* Email */}
          <label for='email'>Enter Email</label>
          <input
            type="text"
            name='email'
            id='email'
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder='Enter email'
            required
          />

          {/* Contact */}
          <label for="tel">Contact</label>
          <input
            type="tel"
            name='contact'
            id='contact'
            value={contact}
            onChange={(e) =>
              setContact(e.target.value)
            }
            placeholder='Enter Mobile number'
            required
          />

          {/* Gender */}
          <label for='gender'>Gender</label>
          <input
            type="radio"
            name='gender'
            value='male'
            id='male'
            checked={gender === 'male'}
            onChange={(e) =>
              setGender(e.target.value)
            }
          />Male

          <input
            type="radio"
            name="gender"
            value='female'
            id="female"
            checked={gender === 'female'}
            onChange={(e) =>
              setGender(e.target.value)
            }
          />Female

          <input
            type="radio"
            name='gender'
            id='other'
            value='other'
            checked={gender === 'other'}
            onChange={(e) =>
              setGender(e.target.value)
            }
          />Other

          {/* Subjects */}
          <label for='lang'>Your best Subject</label>
          <input type="checkbox" name="lang" id="dbms"
            checked={subjects.dbms === true}
            onChange={(e) =>
              handleSub
            }
          />


        </form>
      </fieldset>
    </div>
  )
}

export default App
