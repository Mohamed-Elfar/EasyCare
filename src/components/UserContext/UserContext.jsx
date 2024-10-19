import React, { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider(props) {
  const [userToken, setUserToken] = useState("");

  return (
    <>
      <UserContext.Provider value={{ userToken, setUserToken }}>
        {props.children}
      </UserContext.Provider>
    </>
  );
}
