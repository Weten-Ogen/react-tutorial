import { useState } from "react";

const UseStateCounter = () => {
    const [count , setCount ] = useState(0);

    const handleMinus = () =>{
        setTimeout(() => {
            setCount(prevCount => prevCount - 1);
        }, 2000);
        
    }

    const handleAddus = () =>{
        setTimeout(() => {
            setCount(prevCount => prevCount + 1);
        }, 2000);
       
    }
    const handleResus = () =>{
        setCount(0);
    }





    return (
        <>
        <div className="counter">
        <h1>{ count }</h1>
        <div className="btn">
              <button onClick={handleMinus}>-</button>
              <button onClick={handleResus}>reset</button>
              <button onClick={handleAddus}>+</button>
        </div>
        
      </div>
        </>
  )
}

export default UseStateCounter;
