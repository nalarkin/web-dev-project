import * as React from 'react';

interface Item {
  name: string;
  quantity: number;
  price: number;
}

// const initialFunction = (_: Item[]) => null;

const initialState = {
  items: [],
  updateItems: (_: Item[]) => null,
  addItemToCart: (_: Item) => null,
};

export const CartContext =
  React.createContext<SessionContextInterface>(initialState);

interface CartProviderProps {
  children: React.ReactNode;
}

interface SessionContextInterface {
  items: Item[];
  updateItems: (updatedItems: Item[]) => void;
  addItemToCart: (item: Item) => void;
}

export default function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = React.useState<Item[]>([]);
  const updateItems = React.useCallback(
    (updatedItems: Item[]) => {
      setItems(updatedItems);
    },
    [setItems]
  );
  const addItemToCart = React.useCallback(
    (item: Item) => {
      updateItems([...items, item]);
    },
    [items, updateItems]
  );

  const contextValue = React.useMemo(() => {
    return {
      items,
      updateItems,
      addItemToCart,
    };
  }, [items, updateItems, addItemToCart]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export function useCart() {
  return React.useContext(CartContext);
}
