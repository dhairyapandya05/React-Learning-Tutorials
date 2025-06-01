import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World</h1>
      <div className="flex">
        <Card title="Dhairya" price={24} />
        <Card title="Keval" price={12} />
        <Card title="Ranjit" price={240} />
        <Card title="Ayush" />
      </div>
    </>
  );
}

export default App;
