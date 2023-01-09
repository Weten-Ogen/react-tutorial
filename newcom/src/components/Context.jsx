import {persons} from '../data/persons';
import React, {useState,useContext } from 'react';

const PersonContext = React.createContext();

const Context = () => {
  const  [people , setPeople] = useState(persons)
  const removePerson = (id) => {
    setPeople(() => {
      return people.filter(person => person.id !== id)
  
    })
  }
    
  return (
    <div className='usecontext'>
      <PersonContext.Provider  value={{removePerson}} >
        <List people={people}/>
     </PersonContext.Provider>
    </div>
   
  )
}

export default Context;

const List = ({people}) => {
  return (
    <>
    {
      people.map(person => 
      { return <SinglePerson key={person.id}  {...person}/>})
    }
    </>
  )
  
}

const SinglePerson = ({id , name}) => {
  const {removePerson} = useContext(PersonContext);
  return (
    <div className='item'>
       <h4>{name}</h4>
       <button onClick={() => removePerson(id)}>remove</button>

    </div>
  )
  
}