import React from 'react';

import { useCartUI } from '../../components/cart/CardUIProvider';
import { useCart } from '../../components/cart/CartProvider';

const AboutPage = () => {
  const { items, updateItems, addItemToCart } = useCart();
  const { isCartOpen, toggleCart } = useCartUI();
  return (
    <>
      <div>
        Section 1 – About who you are.
        <br />
        Section 2 – Project Description and why you choose this project
        <br />
        Section 3 – Description of technology used for your site
        <br />
        Section 4 – What have you learned in this class
      </div>
      <div>{`items: ${JSON.stringify(items, null, 2)}`}</div>
      <div>{`isCartOpen: ${JSON.stringify(isCartOpen, null, 2)}`}</div>
      <div className="flex flex-col">
        <button onClick={() => toggleCart()}>toggle cart</button>
        <button
          onClick={() =>
            updateItems([{ name: 'name', price: 49.0, quantity: 7 }])
          }
        >
          setCart to 1 item
        </button>
        <button
          onClick={() =>
            addItemToCart({ name: 'name', price: 49.0, quantity: 9 })
          }
        >
          Add item to cart
        </button>
        <button onClick={() => updateItems([])}>setCart to no items</button>
      </div>
    </>
  );
};

export default AboutPage;

AboutPage.info = {
  title: 'About Page',
  description: 'All About my Site',
};
