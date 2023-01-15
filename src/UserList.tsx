import React from "react";
import { User } from "./types";

type Props = {
  users: User[];
};
export const UserList = ({ users }: Props) => {
  const renderedUsers = users.map((user) => {
    const { email, name } = user;
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{email}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{renderedUsers}</tbody>
    </table>
  );
};
