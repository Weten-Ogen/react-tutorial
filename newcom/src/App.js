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
import ErrorPage from "./components/ErrorPage";
import Context from "./components/Context";
import Proptypes from './components/Proptypes';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route  path="/" element={<UseStateCounter/>}/>
        <Route path="/useobj" element={<UseStateObj/>}/>       
        <Route path="/useref" element={<UseRef/>}/>
        <Route path="/usearr" element={<UseStateArray/>}/>
        <Route path="/usereduce" element={<UseReduce/>}/>
        <Route path="/showhide" element={<ShowHide/>}/>
        <Route path="/shortcic" element={<ShortCircuit/>}/>
        <Route path="/control" element={<ControlledInput/>}/>
        <Route path="/context" element={<Context/>}/>
        <Route path="/errorex" element={<ErrorExample/>}/>
        <Route path='/proptypes' element={<Proptypes/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
