import './Header.css';

const Header = (props) => {
  
    return (
      <div id='container'>
        <h1>Welcome</h1>
        <ul className='navBar'>
          <li><a href="#pricing" className='navItem'>Pricing</a></li>
          <li><a href="#about" className='navItem'>About</a></li>
          <li><a href="#contact" className='navItem'>Contact</a></li>
        </ul>
      </div>
      
    )
  };
export default Header;