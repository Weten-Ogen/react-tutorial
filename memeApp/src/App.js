import Header  from  './Header';
import  {useState } from 'react'
import './header.css';
import Meme from './Meme';
import medapps from './medapps.svg';
import SignUp from './SignUp';


function App() {
 
  const [form , setForm]  = useState({
    'name' : '',
    'password':'',
    'confirm': '',
    'joinedNews': false,
  })
 
  function handleChange(event){
    const{name, value, type, checked} = event.target
    setForm(prevForm => {
         return ({ ...prevForm,
          [name] : type === 'checkbox' ?  checked :  value})
        }
      )
  }
 
  


  return(
    <div>
      <Header img={medapps}/>
      <Meme />
      <SignUp form={form} handleChange={handleChange()}
      />
    </div>
  )
}
export default App;




