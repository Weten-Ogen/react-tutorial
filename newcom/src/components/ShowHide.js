import { useState ,useEffect} from 'react'

const ShowHide = () => {
    const [show, setShow] = useState(false);
  return (
    <div className='showhide'>
      <button onClick={() => setShow(() => !show)}>Show/hide</button>
      { show && <Item/>}
    </div>
  )
}

const Item = () => {
    const [size, setSize] = useState(window.innerWidth);
    
    const checksum = () => {
        setSize(window.innerWidth); 
    }

    useEffect(() =>{
        window.addEventListener('resize', checksum);

        return () => {
            window.removeEventListener('resize',checksum);
        }
         
    },[])
    return (
        <div>
            <h1>Window</h1>
            <h2>Size:{size} px</h2>
        </div>
    )
}


export default ShowHide
