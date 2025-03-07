import { createContext, useState, useEffect } from "react";

// Create User Context
export const UserContext = createContext();

// Context Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user data from local storage when the app starts (Optional)
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Function to update user data
  const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Store user data in local storage
  };

  // Function to logout user
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove user data from local storage
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
