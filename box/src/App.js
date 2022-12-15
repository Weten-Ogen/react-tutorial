import Box from './Box'

import boxes from './boxes'
import { useState } from 'react'
import Joke from './Joke';
import Form from './Form';


function App() {
  const [squares, setSquares] = useState(boxes);

  // update the state when box is click
  function handleColor(id) {
    setSquares(prevSquares =>{
      return prevSquares.map(square => {
        return square.id === id ? {...square, on:!square.on }: square 
      })
    })
 }


  const figure = squares.map(( square => 
    <Box key={square.id} id={square.id} handleColor={handleColor} on={square.on}/>
    ))
  

  return (
    <div>
        <Form/>
        <Joke/>
        { figure }
        
    </div>
  );
}

export default App;
