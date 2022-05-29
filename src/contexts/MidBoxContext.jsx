import { createContext, useState } from "react";

export const MidBoxContext = createContext();

export const MidBoxContextProvider = ({ children }) => {
  const [balloons2, setBalloons2] = useState([
    {
      originalID: 1,
      currentID: 1,
      color:
        `rgb(` +
        Math.floor(Math.random() * 255) +
        `,` +
        Math.floor(Math.random() * 255) +
        `,` +
        Math.floor(Math.random() * 255) +
        `)`,
    },
    {
      originalID: 2,
      currentID: 2,
      color:
        `rgb(` +
        Math.floor(Math.random() * 255) +
        `,` +
        Math.floor(Math.random() * 255) +
        `,` +
        Math.floor(Math.random() * 255) +
        `)`,
    },
    {
      originalID: 3,
      currentID: 3,
      color:
        `rgb(` +
        Math.floor(Math.random() * 255) +
        `,` +
        Math.floor(Math.random() * 255) +
        `,` +
        Math.floor(Math.random() * 255) +
        `)`,
    },
    {
      originalID: 4,
      currentID: 4,
      color:
        `rgb(` +
        Math.floor(Math.random() * 255) +
        `,` +
        Math.floor(Math.random() * 255) +
        `,` +
        Math.floor(Math.random() * 255) +
        `)`,
    },
    {
      originalID: 5,
      currentID: 5,
      color:
        `rgb(` +
        Math.floor(Math.random() * 255) +
        `,` +
        Math.floor(Math.random() * 255) +
        `,` +
        Math.floor(Math.random() * 255) +
        `)`,
    },
  ]);

  const handleBalloonsUpdate2 = (value) => {
    setBalloons2(value);
  };

  return (
    <MidBoxContext.Provider value={{ balloons2, handleBalloonsUpdate2 }}>
      {children}
    </MidBoxContext.Provider>
  );
};
