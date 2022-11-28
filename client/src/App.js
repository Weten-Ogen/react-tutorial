import React from 'react';


function App() {
  const AppStyle = {
   margin:'0px',
   padding:'1rem',
   backgroundColor: 'black'
  }
  return(
    <div style={AppStyle}>
      <Helloworld person="Marcus"/>
      <Helloworld person="Veronica"/>
      <Greet name="Marcus"/>
      <Greet name="Georgina"/>
    </div>
  );
}
export default App;

const Greet = (props) =>{
  const GreetStyle = {
    color : 'blue',
    fontSize: 20,
    padding: 8,
  }
  return (
    <div style={GreetStyle}>
       Greetings , { props.name}
    </div>
  )
}

const Helloworld = (props) => {
  const HelloStyle = {
    padding: 10,
    fontSize:30,
    color:'red',

  
  }
  return (
    
    <div style={HelloStyle}>
    Hello World to you {props.person}
    </div>
  );
}


