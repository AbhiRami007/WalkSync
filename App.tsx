// src/App.tsx

import React, { useContext } from 'react';
import { UserProvider } from './src/UserContext';

const App = () => {
  return (
    <UserProvider/>
  );
};

export default App;
