import './App.css';
import Logo from './logo512.png';
import Person from './hermione.jpg';

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
function Main(){
  return (
    <main>
      <img src={Person} alt=''/>
      <p className='name'>hermione granger</p>
      <p className='job'>wizard</p>
      <form>
        <button type='email' id='email'>email</button>
        <button id='resume'>resume</button>
      </form>
      <section>
        <article className='about'>
        <h3>about</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum incidunt, sit qui commodi quod possimus quaerat deleniti, nesciunt harum non eos numquam </p>
        </article>
        <article className='achievements'>
        <h3>achievements</h3>
        <p>repudiandae quidem nulla mollitia recusandae ab doloremque magnam ad, accusantium vitae officia non facere quasi nobis aspernatur similique corporis quae eos dolore omnis minima! Dolores repudiandae quod illo </p>
        </article>
      </section>

    </main>
  )
}

function Footer(){
  return (
    <footer>
      <small> copyrights reserved </small>
    </footer>
  )
}



function App() {
  
  return(
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}
export default App;




