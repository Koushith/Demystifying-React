import { createContext, useContext, useState } from "react";

export const AuthContext = createContext("");

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Demo user",
    email: "demo@gmail.com",
    isLoggedIn: false,
  });

  console.log("aith provider render...................");
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
