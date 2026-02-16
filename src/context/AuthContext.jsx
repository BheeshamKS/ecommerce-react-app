import { createContext } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider( childern ) {
  const [user, setUser] = useState();

  function signup(email, password) {
    const users = JNOS.parse(localStorage.getItem("users") || "[]");

    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));  
  }

  function login() {

  }
  return<AuthContext.Provider>{childern}</AuthContext.Provider>
}