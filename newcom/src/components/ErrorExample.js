import { useState }from 'react'

const ErrorExample = () => {
  const [text, setText] = useState('Random Title');
  const handleClick = () => {
    setText(prevText => 
        prevText === 'Random Title' ? 'Hello World': 'Random Title'
    )
  }


  return (
    <div className='error'>
        <h1>{text }</h1>
        <div><button onClick={handleClick}>Generate Title</button></div>.
        
    </div>
  )
}

export default ErrorExample
