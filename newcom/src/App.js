import UseStateObj from "./components/UseStateObj";
import UseStateArray from "./components/UseStateArray";
import ErrorExample from "./components/ErrorExample";
import UseStateCounter  from "./components/UseStateCounter";

function App() {
  return (
    <div>
      <ErrorExample/>
      <UseStateCounter/>
      <UseStateArray/>
      <UseStateObj/>
    </div>
  );
}

export default App;
