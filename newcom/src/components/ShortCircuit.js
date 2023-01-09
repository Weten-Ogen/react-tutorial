import { useState } from 'react'

const ShortCircuit = () => {
    
    const [isError, setIsError] = useState(false);
    
    const handleClick = () => {
        setIsError(prevState => !prevState)
    }

  return (
    <div className='shortcircuit'>
       
      <button className='toggle-error' onClick={handleClick}>Toggle Error</button>
      { isError && <h1>Error ...</h1>}
    </div>
  )
}

export default ShortCircuit
