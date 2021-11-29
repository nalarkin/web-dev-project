import * as React from 'react';

import Product from '../../models/product';

// interface Item {
//   name: string;
//   quantity: number;
//   price: number;
// }

// const initialFunction = (_: Item[]) => null;

const initialState = {
  items: [],
  updateItems: (_: Product[]) => null,
  addItemToCart: (_: Product) => null,
};

export const CartContext =
  React.createContext<SessionContextInterface>(initialState);

interface CartProviderProps {
  children: React.ReactNode;
}

interface SessionContextInterface {
  items: Product[];
  updateItems: (updatedItems: Product[]) => void;
  addItemToCart: (item: Product) => void;
}

export default function CartProvider({ children }: CartProviderProps) {
  const [items, setItems] = React.useState<Product[]>([]);
  const updateItems = React.useCallback(
    (updatedItems: Product[]) => {
      setItems(updatedItems);
    },
    [setItems]
  );
  const addItemToCart = React.useCallback(
    (item: Product) => {
      if (item.quantity <= 0) return;
      const sameItemsInCart = items.findIndex((val) => val.name === item.name);
      if (sameItemsInCart >= 0) {
        const matching = items[sameItemsInCart];
        if (matching === undefined) return;
        // const updated = { ...matching, quantity: matching.quantity + 1 };
        matching.quantity = Math.min(matching.quantity + 1, item.quantity);
        if (matching.quantity) setItems(items);
        return;
      }
      const singleItem = { ...item, quantity: 1 };
      updateItems([...items, singleItem]);
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
