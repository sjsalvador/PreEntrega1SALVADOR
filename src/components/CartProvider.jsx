import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Función para agregar un ítem al carrito
  const addItem = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  // Función para eliminar un ítem del carrito
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Función para limpiar el carrito
  const clearCart = () => setCart([]);

  // Función para obtener el total de la compra
  const getTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
