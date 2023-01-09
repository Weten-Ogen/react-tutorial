import { useState } from 'react'

const UseStateObj = () => {
    const [person, setPerson] = useState({
        name: 'Marcus',
        age : 23,
        message:'random message',
    });

    const handleChange = () => {
        setPerson(person => {
           return  {...person, 
                message: 
                person.message === 'random message' ?  'new message' : 'random message'}
        })
    }

  return (
    <div className='container'>
        <section className='element'>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
        </section>
      <button onClick={handleChange}>change message</button>
    </div>
  )
}

export default UseStateObj
