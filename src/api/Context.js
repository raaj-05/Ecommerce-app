import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [username, setUserName] = useState('');
  const [cartItem, setCartItem] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(1);

  return (
    <AppContext.Provider
      value={{
        loader,
        setLoader,
        username,
        setUserName,
        cartItem,
        setCartItem,
        itemQuantity,
        setItemQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
