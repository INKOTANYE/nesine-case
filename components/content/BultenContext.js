import React, { createContext, useState, useEffect } from 'react';
import data from './data/bulten_data.json';

const BultenContext = createContext(null);

export function BultenProvider({ children }) {
  const [bulten, setBulten] = useState([]);

  const values = { bulten, setBulten };

  return <BultenContext.Provider value={values}>{children}</BultenContext.Provider>;
}

export default BultenContext;
