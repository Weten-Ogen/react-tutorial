import {Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navBar'>
      <ul>
      <li>
        <Link  to='/'>Home</Link>
      </li>
      <li>
        <Link to='/useref'>Ref</Link>
      </li>
      <li>
        <Link to='/usearr'>Arr</Link>
      </li>
      <li>
        <Link to='/showhide'>ShowHide</Link>
      </li>
      <li>
        <Link to='/control'>Control</Link>
      </li>
      <li>
        <Link to='/errorex'>ErrorExp</Link>
      </li>
      <li>
        <Link to='/shortcic'>ShortCic</Link>
      </li>
      <li>
        <Link to='/usereduce'>UseReduce</Link>
      </li>
      <li>
        <Link to='/context'>Context</Link>
      </li>
      <li>
        <Link to='/proptypes'>Props</Link>
      </li>
      </ul> 
    </div>
  )
}

export default Navbar
