import React from 'react'
import { persons } from  '../data/persons'
import { useState } from 'react'

const UseStateArray = () => {
  const [people , setPeople] = useState(persons);

  const handleClick = (id) => {
    const items = people.filter(person => {
       return  person.id !== id 
    })
    setPeople(items)
  }


  return (
    <div className='main-container'>
        {
          people.map(person => {
            return (
              <div 
                className='person' 
                id={person.id} 
                key={person.id}>

                  <h4>{person.name}</h4>

                  <button 
                    className='remove-btn'
                    onClick={() => handleClick(person.id)}
                    >Remove
                  </button>
              </div>)

          }) 
        }
      {
        people === persons ?
        (<button onClick={() => setPeople([])}>Clear</button>): 
        (<button onClick={() => setPeople(persons)}>Show</button>)
      } 

    </div>
  )
}

export default UseStateArray
