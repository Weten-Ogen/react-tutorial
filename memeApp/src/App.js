import Header  from  './Header';
import  {useState } from 'react'
import './header.css';
import medapps from './medapps.svg';
import Form from './Form';



function App() {
 
  const [form , setForm]  = useState({
    'fullname' : '',
    'password':'',
    'confirm': '',
    'joinedNews': false,
  })


 
  function handleChange(event){
    const{name, value} = event.target
    setForm(prevForm => {
         return ({ 
          ...prevForm,
          [name] :   value
        })
        }
      )
  }
 
  


  return(
    <div>
      <Header img={medapps}/>
        <Form handleChange={handleChange} form={form}/>
    </div>
  )
}
export default App;




