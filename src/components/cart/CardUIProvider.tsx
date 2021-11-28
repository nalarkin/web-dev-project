import React, {
  useState,
  useMemo,
  useCallback,
  useContext,
  createContext,
} from 'react';

type CartContextType = {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
};

const initialContext = {
  isCartOpen: false,
  openCart: () => null,
  closeCart: () => null,
  toggleCart: () => null,
};

export const CartContext = createContext<CartContextType>(initialContext);

type CartUIProviderProps = {
  children: React.ReactNode;
};
export default function CartUIProvider({ children }: CartUIProviderProps) {
  const [open, setOpen] = useState(false);

  const openCart = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const closeCart = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const toggleCart = useCallback(() => {
    setOpen(!open);
  }, [setOpen, open]);

  const contextValue = useMemo(() => {
    return {
      isCartOpen: open,
      openCart,
      closeCart,
      toggleCart,
    };
  }, [open, openCart, closeCart, toggleCart]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export function useCartUI() {
  return useContext(CartContext);
}
