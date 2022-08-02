import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const API = "https://jsonplaceholder.typicode.com/users";
  const [userDetails, setUserDetails] = useState(null);

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUserDetails(data);
      });
  }, [id]);

  console.log(userDetails);
  return (
    <div>
      {userDetails ? (
        <table border={1}>
          <thead>
            <tr>
              <td>Name</td>
              <td>UserName</td>
              <td>Email</td>
              <td>City</td>
              <td>Street</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userDetails.name}</td>
              <td>{userDetails.username}</td>
              <td>{userDetails.email}</td>
              <td>{userDetails.address.city}</td>
              <td>{userDetails.address.street}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default UserDetails;
