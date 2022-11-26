import React from 'react';




const Helloworld = (props) => {
  const HelloStyle = {
    padding: 10,
    fontSize:30,

  
  }
  return (
    
    <div style={HelloStyle}>
    Hello World to you {props.person}
    </div>
  );
}

function App() {
  return(
    <div>
      <Helloworld person="Marcus"/>
      <Helloworld person="Veronica"/>
    </div>
  );
}
export default App;
