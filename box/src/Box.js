import React from 'react'
import './index.css'




const Box = ({key,on,id,handleColor}) => {
 

  
  const styles= {
    backgroundColor: on ? 'black': 'gray'
  }


  return (
    <div  onClick={() => handleColor(id) } style={styles} key={key} id={id}  className='box' ></div>
  )
}

export default Box
