import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const API = "https://jsonplaceholder.typicode.com/users";
  const [userDetails, setUserDetails] = useState({});

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`${API}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return <div>sdfgfhgjhk</div>;
};

export default UserDetails;
