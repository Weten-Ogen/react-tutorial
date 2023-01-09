import { useState } from 'react'

const ControlledInput = () => {
    const [input, setInput] = useState({
        'firstname' : '',
        'password': '',
        'email' : '',
    });

    const [people, setPeople] = useState([]);

    const handlechange = (e) => {
        const {value, name} = e.target
        setInput(prevInp => {
            return {
                ...prevInp,
                [name] : value
            }
        })
    }
   

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            const person = {...input}
            setPeople(people => {
                return [...people,person]
            })
        }
        else{
            return people
        }
    }
  return (
    <>
    <div className='controlled' onSubmit={handleSubmit}>
    <form className='form'>
      <div className='form-control'>
          <label htmlFor='firstname'>Name: </label>
          <input 
              id='firstname' 
              type='text' 
              name='firstname'
              value={input.firstname} 
              onChange={handlechange} 
          />
      </div>
      <div className='form-control'>
          <label htmlFor='email'>Email: </label>
          <input 
              id='email' 
              type='email' 
              name='email'
              value={input.email}
              onChange={handlechange}
          />
      </div>
      <div className='form-control'>
          <label htmlFor='password'>Password: </label>
          <input  
              id='password' 
              type='password' 
              name='password' 
              value={input.password}
              onChange={handlechange} 
          />
      </div>
      <div className='form-control'>
          <button type="submit">Add Person</button>
      </div>
      
    </form>
    {people.map((person, index) => {
      return (
          <div key={index} className='person-div' >
          <div className='person-left'>{person.firstname}</div>
          <div className='person-right'>{person.email}</div>
      </div>
      )
    })}

  </div>
    </>
  )
}

export default ControlledInput
