import UseStateObj from "./components/UseStateObj";
import UseStateArray from "./components/UseStateArray";
import ErrorExample from "./components/ErrorExample";
import UseStateCounter  from "./components/UseStateCounter";
import ShortCircuit from "./components/ShortCircuit";
import ShowHide  from "./components/ShowHide";
import ControlledInput from "./components/ControlledInput";

function App() {
  return (
    <div>
      <ErrorExample/>
      <UseStateCounter/>
      <UseStateArray/>
      <UseStateObj/>
      <ShortCircuit/>
      <ShowHide/>
      <ControlledInput/>
    </div>
  );
}

export default App;
