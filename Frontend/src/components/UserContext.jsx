// import { createContext, useState, useEffect } from "react";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(() => {
//     const savedUser = localStorage.getItem("user");
//     return savedUser ? JSON.parse(savedUser) : {
//       userId: null,
//       username: null,
//       email: null,
//       userType: null,
//       profilePic: "https://via.placeholder.com/150",
//     };
//   });

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(user));
//   }, [user]);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };


import { createContext, useState, useEffect, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser
      ? JSON.parse(savedUser)
      : {
          userId: null,
          username: null,
          email: null,
          userType: null,
          profilePic: "https://via.placeholder.com/150",
        };
  });

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Add this custom hook
export const useUserContext = () => useContext(UserContext);
