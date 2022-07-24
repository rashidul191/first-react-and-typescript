import React, { FC } from "react";
import UserModel from "./models";

// const User = (props: {age: number}) => {
// const User: FC<{ age: number }> = (props) => {

/* 
// interface Props
interface Props {
  age: number;
  addUser: () => void;
} */

// interface Props with UserModel
interface Props {
  user: UserModel;
  addUser: (user: UserModel) => void;
}

const User: FC<Props> = (props) => {
  const { user, addUser } = props;
 

  return (
    <div>
      <h2>User: {user.name}</h2>
      <h2>User Email: {user.email}</h2>
      <button onClick={() => addUser(user)}>add me</button>
    </div>
  );
};

export default User;
