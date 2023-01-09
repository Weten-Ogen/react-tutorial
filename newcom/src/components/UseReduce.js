import {useState , useReducer} from 'react'
import {persons} from "../data/persons.js"

const reducer = (state, action) =>{
  if(action.type === 'TESTING'){
    return {...state,people:persons,isModalOpen:true,ModalContent:'I am Modal'};
  }
  return state;
}

const defaultState = {
  people: [],
  isModalOpen : false,
  ModalContent: 'hello world'
}



const UseReduce = () => {
    const [name , setName] = useState('')
    const [state, dispatch] = useReducer(reducer, defaultState)
   
  const handleSubmit = e => {
    e.preventDefault()
    if(name){
      dispatch({type: 'TESTING'})
    }else{

    }
  }

  return (
    <div className='usereduce' >
      {state.isModalOpen && state.ModalContent}
      <form  onSubmit={handleSubmit}>
        <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>
      {state.people.map(person => <div key={person.id}>{person.name}</div>)}
    </div>
  )
}

export default UseReduce
