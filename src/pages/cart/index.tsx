import React from 'react';

import { useCart } from '../../components/cart/CartProvider';

const CartPage = () => {
  const { items } = useCart();
  return <div>{`ITEMS: ${JSON.stringify(items, null, 2)}`}</div>;
  /**
   * <CartRow
   *    Price
   *    quantity
   *    image
   * />
   * total Price
   *
   * checkout button
   */
};

export default CartPage;

CartPage.info = {
  title: 'My Cart',
  description: 'Your Shopping Cart',
};
