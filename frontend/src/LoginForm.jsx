import { useState } from 'react'
import './App.css'
import { useAuth } from "./context/AuthContext";

function LoginForm({loginUrl}) {
  const { login, username: loggedInUsername } = useAuth();
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        alert("Login successful.  access token = " + data.access_token);
        // เรียกฟังก์ชัน login เพื่อเก็บ username และ token
        login(username, data.access_token);  
    } else if (response.status === 401) {
        setErrorMessage("Invalid username or password");
      }
    } catch (error) {
      console.log("Error logging in:", error);
    }
  }
  return (
    <form onSubmit={(e) => {handleLogin(e)}}>
      {errorMessage && <p>{errorMessage}</p>}
      <button type="submit">Login</button>
      
      {loggedInUsername && <p>User {loggedInUsername} is already logged in.</p>}
    </form>
  );
}

export default LoginForm;