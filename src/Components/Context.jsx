import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);
  const [displayName, setDisplayName] = useState(null);

  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const setUser = (email, name) => {
    setUserEmail(email);
    setDisplayName(name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("displayName", name);
  };

  const logoutUser = () => {
    setUserEmail("");
    setDisplayName("");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("displayName");
  };

  return (
    <UserContext.Provider
      value={{
        userEmail,
        displayName,
        setUser,
        logoutUser,
        formFields,
        setFormFields,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
