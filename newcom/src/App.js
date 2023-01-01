import UseStateObj from "./components/UseStateObj";
import UseStateArray from "./components/UseStateArray";
import ErrorExample from "./components/ErrorExample";
import UseStateCounter  from "./components/UseStateCounter";
import ShortCircuit from "./components/ShortCircuit";
import ShowHide  from "./components/ShowHide";
import ControlledInput from "./components/ControlledInput";
import UseRef from "./components/UseRef"
import UseReduce from "./components/UseReduce";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  exact path="/">
        <ShowHide/>
      </Route>
      <Route path="/about">
        <UseStateObj/>
      </Route>
        <Route path="/usestatearray">
          <UseStateArray/>
        </Route>
        <Route path="/showhide">
        <UseStateCounter/>
        </Route>
        <Route path="/shortcicuit">
          <ShortCircuit/>
        </Route>
        <Route path="/errorexample">
          <ErrorExample/>
        </Route>
        <Route path="/controlled">
          <ControlledInput/>
        </Route>
        <Route path="/useref">
            <UseRef/>
        </Route>
        <Route path="/usereduce">
          <UseReduce/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
