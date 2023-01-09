import {useState} from 'react'
import { First } from 'react-bootstrap/esm/PageItem'

const Form = () => {
    const[forms,setForms] = useState({
        firstname : '',
        lastname : '',
        email : '',
        comments: '',
        isFriendly:true,
        employment:'',
        favColor:'',
    }) 
    const handleSubmit = (event) => {
         event.preventDefault()
         console.log(forms)
    }
   

    const handleChange = (event) =>{
        const {name , type, checked, value} = event.target
        setForms(prevForms => {
            return {
                ...prevForms,
                [name] : type === 'checkbox' ?  checked : value
            }
        })
       
        // })
      
    }
    

  return (
    <form  onSubmit={handleSubmit}>
        <div>{forms.firstname} {forms.lastname} {forms.email} {forms.comments}</div>
        <input type='text' name='firstname' 
        placeholder='firstname' onChange={handleChange}
        value={forms.firstname}
        />
        <input type='text' name='lastname' placeholder='lastname' onChange={handleChange} value={forms.lastname}/>
        <input type='text' name='email' placeholder='email' onChange={handleChange} value={forms.email}/>

        <textarea value={forms.comments} onChange={handleChange} name='comments'/>

        <input type='checkbox' id='isFriendly' name='isFriendly' checked={forms.isFriendly} onChange={handleChange} />
        <label htmlFor='isFriendly'>Are you friendly</label>
        <br/>

        <fieldset>
            <legend>Current Job</legend>
            <input
                type="radio"
                id='unemployed'
                name='employment'
                value='unemployed'
                onChange={handleChange}
                checked={forms.employment === 'unemployed'}
            />
            <label htmlFor='unemployed' >unemployed</label>
            <br/>
            <input
            type="radio"
            id='full-time'
            name='employment'
            value='full-time'
            onChange={handleChange}
            checked={forms.employment === 'full-time'}
            />
            
            <label htmlFor='full-time' >Full Time</label>
            <br/>
            <input
            type="radio"
            id='part-time'
            name='employment'
            value='part-time'
            onChange={handleChange}
            checked={forms.employment === 'part-time'}
            />
            <label htmlFor='part-time'>Part Time</label>
            <br/>
        </fieldset>
        <label htmlFor='favColor'>What is your Favorite Color</label>
        <br/>
        <select id='favColor' 
        value={forms.favColor} 
        onChange={handleChange}
        name='favColor'
        >
            <option value=''>Select</option>
            <option value='red'>Red</option>
            <option value='blue'>Blue</option>
            <option value='yellow'>Yellow</option>
            <option value='white'>White</option>
            <option value='orange'>orange</option>
            <option value='green'>Green</option>
            <option value='violet'>Violet</option>
            
        
        </select>
        <br/>
        <button>Submit</button>
        
    </form>
  )
}

export default Form
