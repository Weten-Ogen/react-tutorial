import { useRef, useEffect } from 'react'

const UseRef = () => {
    const myRef = useRef(null);

    useEffect(() => {
        console.log(myRef.current.value)
        console.log(myRef)
    })

  return (
    <div className='useref'>
        <input
        ref={myRef} 
        type='text'
        name='text'
        />
        
    </div>
    
  )
}

export default UseRef
