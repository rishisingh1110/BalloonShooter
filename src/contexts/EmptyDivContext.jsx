import { createContext, useState } from "react";

export const EmptyDivContext = createContext();

export const EmptyDivContextProvider = ({ children }) => {
  const [balloons1, setBalloons1] = useState([]);

  const handleBalloonsUpdate1 = (value) => {
    setBalloons1(value);
  };

  return (
    <EmptyDivContext.Provider value={{ balloons1, handleBalloonsUpdate1 }}>
      {children}
    </EmptyDivContext.Provider>
  );
};
