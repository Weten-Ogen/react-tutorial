import React from 'react';


function App() {
  const AppStyle = {
    display:'flex',
    flexWrap:'wrap',
  }
  return(
    <div style={AppStyle}>
      <Bg color ={'red'}/>
      <Bg/>
      <Bg/>
      <Bg/>
      <Bg/>
      <Bg/>
    
    </div>
  );
}
export default App;

const Bg = (props) => {
  const BgStyle= {
    margin: '1rem',
    padding: '0px',
    width: '27%',
    height:'55vh',
    backgroundColor:'white',
    boxShadow:"1px 1px 10px 1px black",
  }
  return (
    <div 
    style={BgStyle}
    >
    <Square/>
    <Label/>


    </div>
  )
}
const Square = () => {
  const SquareStyle = {
    height:"40vh",
    backgroundColor:'red',
  }
  return (
    <div style={SquareStyle}>
    </div>
  )
}

const Label = () => {
  const LabelStyle = {
    textAlign: 'center',
    fontSize : '24px',
  }
  return (
    <div style={LabelStyle}>
      <p>#0000EF</p>
     
    
    </div>
  )
}


