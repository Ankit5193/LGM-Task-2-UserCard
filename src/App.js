import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import UserCard from "./Component/UserCard"

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    setTimeout(async () => {
      let response = await fetch("https://reqres.in/api/users?page=1");
      const json_response = await response.json();
      setUsers(json_response.data);
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <Navbar logoName={"LetsGrowMore"} toggle={getUsers} />
      {!loading && <UserCard user={users} />}
    </>
  );
}

export default App;
