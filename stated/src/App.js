
import  {useState, useEffect } from 'react'


function App() {
  const [show , setShow] = useState(true);
  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
  const handleClick = () => {
    setShow(prevShow => !prevShow  )
  }
  
  useEffect(() => {
    function setWidth() {
      
      setWindowWidth(window.innerWidth);
    }
      window.addEventListener("resize",setWidth)
    return () => {
      console.log('cleaning up')
      window.removeEventListener('resize', setWidth)
    }
   
  }, [])


  
  return (
    <div>
        <button onClick={handleClick}>Toggle window width </button>
        {show && <div>Window Tracker: {windowWidth}</div>}
    </div>
   
  );
}

export default App;
