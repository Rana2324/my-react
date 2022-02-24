import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExterNalUsers></ExterNalUsers>
    </div>
  );
}

function ExterNalUsers() {
  const [users, setUsers] = useState([]);

  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>External Users</h2>
      
      {
        users.map(user => <User name={user.name} email= {user.email}></User>)

      }
    </div>
  );
}
function User(props){
  return(
    <div className="user">
        <h2>Name: {props.name}</h2>
        <p>Email: {props.email}</p>
    </div>
  )
}



export default App;
