import React from "react";

function Say(props){
  return (
    <h1>hello ,{props.name}</h1>
  );
}
function Coun(){
  const[count, setCount] = React.useState(0);
  function updateCount(){
    setCount(count + 1);
  }
  return(
    <div>
        <h2>{ count }</h2>
        <button onClick={updateCount}>Click</button>
    </div>
  );
}

function Questions(){
  const [state, setstate] = React.useState({
    num1: 1,
    num2: 2,
    response: "",
    score : 0
  });


  function updateResponse(event) {
    setstate({
      ...state,
      response:event.target.value,
    });
  }

  function check(event){
    if(event.key === "Enter"){
      const answer = parseInt(state.response) 
      if (state.num1 + state.num2 === answer){
        setstate(
          {
            ...state,
            num1 : Math.ceil(Math.random() * 10),
            num2 : Math.ceil(Math.random() * 10),
            score:state.score + 1,
          });
      }else{
        setstate(
          {
            ...state,
            score:state.score - 1,
          });
      }
    }
  }
  return (
    <div>
      <div>Score is {state.score}</div>
      <div>{state.num1} + {state.num2}</div>
      <input onKeyUp={check} onChange={updateResponse} autoComplete="off" autoFocus name="answer" type={"text"}/>
    </div>
  );
}

function App() {
  return (
    <div>
      <Say  name="Harry"/>
      <Say name="Hermione"/>
      <Coun />
      <Questions/>
    </div>
    
  );
}




export default App;
