import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserContextProvider from "./context/UserContextprovider";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <div className="bg-red-400 text-white">Chai is important</div>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
