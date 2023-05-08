import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "demo user",
    email: "Demo@gmail.com",
    isloggedIn: false,
  });

  return (
    <AuthContext.Provider value={{ setUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
