import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number;
  category: string;
}

interface CartContextValue {
  cartItems: CartItem[];
  totalItems: number;
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  updateQuantity: (id: number, newQuantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addItem: CartContextValue["addItem"] = (item, quantity = 1) => {
    setCartItems((items) => {
      const existing = items.find((i) => i.id === item.id);
      if (existing) {
        return items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...items, { ...item, quantity }];
    });
  };

  const updateQuantity: CartContextValue["updateQuantity"] = (id, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems((items) => items.filter((i) => i.id !== id));
    } else {
      setCartItems((items) =>
        items.map((i) => (i.id === id ? { ...i, quantity: newQuantity } : i))
      );
    }
  };

  const clearCart = () => setCartItems([]);

  const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartItems, totalItems, addItem, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};