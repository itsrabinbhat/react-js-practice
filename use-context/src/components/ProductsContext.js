import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    {
      name: "item 1",
      price: "10",
    },
    {
      name: "item 2",
      price: "15",
    },
    {
      name: "item 3",
      price: "25",
    },
    {
      name: "item 4",
      price: "20",
    },
    {
      name: "item 5",
      price: "50",
    },
    {
      name: "item 6",
      price: "80",
    },
  ];

  const value = { products, cartItems, setCartItems };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
