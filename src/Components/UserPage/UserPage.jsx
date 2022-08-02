import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UserPage = () => {
  const API = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  console.log(users);

  return (
    <div>
      <h1>User Page</h1>
      {users.map((user) => (
        <Link to={`/user/${user.id}`} key={user.id} style={{ color: "black" }}>
          <h4>
            {user.id}) {user.name}
          </h4>
        </Link>
      ))}
    </div>
  );
};

export default UserPage;
