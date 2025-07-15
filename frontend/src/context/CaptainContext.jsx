import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [captain, setCaptain] = useState({
    email: "",
    fullname: {
      firstname: "",
      lastname: "",
    },
    password: "",
  });

  return (
    <div>
      <CaptainDataContext.Provider value={{ captain, setCaptain }}>
        {children}
      </CaptainDataContext.Provider>
    </div>
  );
}
export default CaptainContext;