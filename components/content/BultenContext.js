import React, { createContext, useState } from 'react';

const BultenContext = createContext(null);

export function BultenProvider({ children }) {
  const [bulten, setBulten] = useState([]);

  const values = { bulten, setBulten };

  return <BultenContext.Provider value={values}>{children}</BultenContext.Provider>;
}

export default BultenContext;
