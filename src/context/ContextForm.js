import React, { createContext, useState } from 'react';

export const Context = createContext();

function Provider({ children }) {
  const [area1, setArea1] = useState(0);
  const [liters1, setLiters1] = useState(0);
  const [area2, setArea2] = useState(0);
  const [liters2, setLiters2] = useState(0);
  const [area3, setArea3] = useState(0);
  const [liters3, setLiters3] = useState(0);
  const [area4, setArea4] = useState(0);
  const [liters4, setLiters4] = useState(0);

  const object = {
    area1,
    setArea1,
    liters1,
    setLiters1,
    area2,
    setArea2,
    liters2,
    setLiters2,
    area3,
    setArea3,
    liters3,
    setLiters3,
    area4,
    setArea4,
    liters4,
    setLiters4,
  };

  return (
    <Context.Provider value={ object }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
