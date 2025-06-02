import React, {useState, useContext} from "react";
import UserContext from "../context/userContext";

function Login() {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const {setUser} = useContext(UserContext);
  const handleSubmit = (e) => {
    console.log("Submit clicked");
    e.preventDefault();
    setUser({
      userName,
      password,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        value={userName}
        type="text"
        placeholder="username"
        onChange={(e) => {
          setuserName(e.target.value);
        }}
      />
      <input
        type="text"
        value={password}
        placeholder="password"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default Login;
