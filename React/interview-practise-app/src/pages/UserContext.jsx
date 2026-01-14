import { createContext } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const user = { name: "jagdish" };
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
