import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(15);
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>counter value: {count}</h2>
      <button
        className="bg-gray-600"
        onClick={() => {
          setCount(++count);
          // console.log("Value is : ", ++c);
        }}
      >
        Add Value
      </button>
      <br />
      <button className="bg-red-200">Subtract Value</button>
    </>
  );
}

export default App;
