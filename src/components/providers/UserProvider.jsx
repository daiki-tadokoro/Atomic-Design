import React, { createContext } from "react";

// UserContextの初期化
export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "tadokoro";
  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
