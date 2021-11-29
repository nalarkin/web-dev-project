import React from 'react';

// eslint-disable-next-line import/order
import Image from 'next/image';
// import { ObjectId } from 'mongodb';

// import { useCart } from '../../components/cart/CartProvider';
import Link from 'next/link';
import { mutate } from 'swr';

import { BUTTON_PRIMARY_CLASSES } from '../../components/Button';
import { useCart } from '../../components/cart/CartProvider';
import { useToast } from '../../components/Toast';
import Product from '../../models/product';
import style from './index.module.scss';

const totalPrice = (quantity: number, price: number) => {
  const total = quantity * price;
  return total.toFixed(2);
};

const CartItem = ({ product }: { product: Product }) => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { name, quantity, price, image_url, _id, status } = product;
  const href = status === 'secret' ? `/secrets/${_id}` : `/products/${_id}`;

  return (
    <div className={style.itemGrid}>
      {/* <div className="block"> */}
      <div className="p-2">
        <Link href={href}>
          <a>
            <Image src={image_url} width={200} height={300} />
          </a>
        </Link>
      </div>
      {/* </div> */}
      <Link href={href}>
        <a>
          <div>{name}</div>
        </a>
      </Link>
      <div>{`${quantity}`}</div>
      <div>{`$${price}`}</div>
      <div>{`$${totalPrice(quantity, price)}`}</div>
    </div>
  );
};

const getSumPrice = (products: Product[]) => {
  let sum = 0.0;
  products.forEach(({ price, quantity }) => {
    sum += price * quantity;
  });
  return sum.toFixed(2);
};

const TotalPrice = () => {
  const { items: products } = useCart();
  const totalSum = getSumPrice(products);

  return (
    <div className="flex justify-end font-bold text-lg">
      <div className="mr-5">Total</div>
      <div className="mr-60">${totalSum}</div>
    </div>
  );
};

const ColumnHeaders = () => {
  return (
    <div className={style.columnHeaders}>
      <div>Image</div>
      <div>Name</div>
      <div>Quantity</div>
      <div>Price</div>
      <div>Total</div>
    </div>
  );
};

const CheckoutButton = () => {
  const { notifyError, notifySuccess } = useToast();
  const { items: products, updateItems } = useCart();

  async function purchaseNormalProducts() {
    const normalProducts = products.filter((item) => item.status === 'normal');
    if (normalProducts.length <= 0) return;
    await mutate('/api/products/', async () => {
      // let's update the todo with ID `1` to be completed,
      // this API returns the updated data
      await fetch('/api/products/', {
        method: 'PATCH',
        body: JSON.stringify(normalProducts),
      });
    });
  }
  async function purchaseSecretProducts() {
    const secretProducts = products.filter((item) => item.status === 'secret');
    if (secretProducts.length <= 0) return;
    await mutate('/api/secrets/', async () => {
      // let's update the todo with ID `1` to be completed,
      // this API returns the updated data
      await fetch('/api/secrets/', {
        method: 'PATCH',
        body: JSON.stringify(secretProducts),
      });
    });
  }
  const handleClick = async () => {
    try {
      await purchaseNormalProducts();
      await purchaseSecretProducts();
      notifySuccess();
      updateItems([]);
    } catch (error) {
      notifyError();
    }
  };
  return (
    <div className="w-max mx-auto mt-10">
      <button onClick={handleClick} className={BUTTON_PRIMARY_CLASSES}>
        Complete Purchase
      </button>
    </div>
  );
};

const CartWithItems = () => {
  const { items } = useCart();
  // const testProducts = [testProduct, testProduct, testProduct, testProduct];
  return (
    <div className="flex flex-col divide-y-2">
      <ColumnHeaders />
      {items.map((item, idx) => (
        <CartItem product={item} key={idx} />
      ))}
      <TotalPrice />
      <CheckoutButton />
    </div>
  );
};

const CartPage = () => {
  const { items } = useCart();
  // const testProducts = [testProduct, testProduct, testProduct, testProduct];
  if (items.length > 0) {
    return <CartWithItems />;
  }
  return (
    <div className="mx-auto text-xl text-center mt-5">No Items In Cart</div>
  );
};

CartPage.info = {
  title: 'My Cart',
  description: 'Your Shopping Cart',
};

export default CartPage;
