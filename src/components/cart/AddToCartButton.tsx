import React from 'react';

import Product from '../../models/product';
import { BUTTON_PRIMARY_CLASSES } from '../Button';
import { useCart } from './CartProvider';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const isOutOfStock = product.quantity <= 0;
  const { addItemToCart } = useCart();
  return (
    <button
      className={BUTTON_PRIMARY_CLASSES}
      disabled={isOutOfStock}
      onClick={() => addItemToCart(product)}
    >
      {isOutOfStock ? 'Out of stock' : 'Add to bag'}
    </button>
  );
};

export default AddToCartButton;
