import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function UserDataContext() {
  const user = useContext(UserContext);
  return <h3>{user?.name}</h3>;
}
