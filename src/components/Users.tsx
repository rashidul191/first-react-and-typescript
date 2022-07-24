import React, { useEffect, useState } from "react";
import UserModel from "../User/models";
import User from "../User/User";

const Users = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

  const [team, setTeam] = useState<UserModel[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const handleAddUser = (user: UserModel): void => {
    const newTeam = [...team, user];
    setTeam(newTeam);
  };
  return (
    <div>
      <h2>My user: </h2>
      <h2>Team: {team.length}</h2>
      {/* <User age={23} addUser={handleAddUser}></User> */}
      {users.map((user, index) => (
        <User key={index} user={user} addUser={handleAddUser}></User>
      ))}
    </div>
  );
};

export default Users;
