import { useState } from "react";
import { UserForm } from "./UserForm";
import { User } from "./types";
import { UserList } from "./UserList";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const onUserAdd = (user: User) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserForm {...{ onUserAdd }} />
      <hr />
      <UserList {...{ users }} />
    </div>
  );
}
export default App;
