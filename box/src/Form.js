import {useState} from 'react'
import { First } from 'react-bootstrap/esm/PageItem'

const Form = () => {
    const[fname,setFname] = useState('')
    const[lname,setLname] = useState('')

    const handleFirstChange = (event) =>{
        setFname(()=> event.target.value)
      
    }
    const handleLastChange = (event) =>{
        setLname(()=> event.target.value)
      
    }

  return (
    <form>
        <div class="form-name">{fname} {lname}</div>

        <input type='text' id='fname' placeholder='firstname' onChange={handleFirstChange}/>
        <input type='text' id='lname' placeholder='lastname' onChange={handleLastChange}/>
        
    </form>
  )
}

export default Form
