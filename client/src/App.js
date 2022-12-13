import './App.css';
import Logo from './logo512.png';
import Person2 from  './gryffindor.png';
import Person1 from './hermione.jpg';
import Person3 from  './gryffindor2.png';
import Person4 from  './hufflepuff.png';
import Person5 from  './cho.jpg';

function Header(){
  return (
    <header>
      <nav>
        <img src={Logo}  alt='' />
        <ul>
          <li><a>pricing</a></li>
          <li><a>contact</a></li>
          <li><a>about</a></li>
        </ul>
      </nav>
    </header>
  )
}
function Main({person, name}){
  return (
    <div className='main-container'>
      <main className='main-sec'>
      <img src={person} alt=''/>
        <h3 className='name'>{name}</h3>
        <h4 className='job'>wizard</h4>
        <form className='main-form'>
          <button type='email' id='email'>email</button>
          <button id='resume'>resume</button>
        </form>
      </main>
    </div>
  )
}




function App() {
  
  return(
    <div>
      <Header/>
      <div className='app-main-container'>
        <Main person = {Person1} name='hermione granger'/>
        <Main person = {Person2} name='gryffindor'/>
        <Main person = {Person3} name='gryffindor2'/>
        <Main person={Person4} name='hufflepuff'/>
        <Main person={Person5} name='ravenclaw'/>
      </div>
     
    </div>
  )
}
export default App;




