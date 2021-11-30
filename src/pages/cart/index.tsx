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

const totalPrice = (quantity: number, price: number) => {
  const total = quantity * price;
  return total.toFixed(2);
};

// const CartItem = ({ product }: { product: Product }) => {
//   // eslint-disable-next-line @typescript-eslint/naming-convention
//   const { name, quantity, price, image_url, _id, status } = product;
//   const href = status === 'secret' ? `/secrets/${_id}` : `/products/${_id}`;

//   return (
//     <div className={style.itemGrid}>
//       {/* <div className="block"> */}
//       <div className="">
//         <Link href={href}>
//           <a>
//             <Image src={image_url} width={200} height={300} />
//           </a>
//         </Link>
//       </div>
//       {/* </div> */}
//       <Link href={href}>
//         <a>
//           <div>{name}</div>
//         </a>
//       </Link>
//       <div>{`${quantity}`}</div>
//       <div>{`$${price}`}</div>
//       <div>{`$${totalPrice(quantity, price)}`}</div>
//     </div>
//   );
// };

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
    // <tr className="">
    <tr className=" font-bold text-lg">
      <td></td>
      <td></td>
      <td></td>
      <td className="mr-5">Total</td>
      <td className="mr-60">${totalSum}</td>
    </tr>
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

const CartTable = () => {
  const { items } = useCart();
  return (
    <table className="divide-y-4 divide-blue-200">
      <tr className="font-semibold text-base md:text-lg">
        <td className="pb-2">Image</td>
        <td className="pb-2">Name</td>
        <td className="pb-2 pr-2">Quantity</td>
        <td className="pb-2">Price</td>
        <td className="pb-2">Total</td>
      </tr>
      {items.map(({ image_url, name, price, quantity, _id, status }) => {
        const href =
          status === 'secret' ? `/secrets/${_id}` : `/products/${_id}`;

        return (
          <tr key={_id?.toString()} className="">
            <td className="">
              <Link href={href}>
                <a className="">
                  <Image
                    src={image_url}
                    width={150}
                    height={200}
                    alt={name}
                    // className="h-10"
                  />
                </a>
              </Link>
            </td>
            {/* </div> */}
            <td>
              <Link href={href}>
                <a>
                  <div>{name}</div>
                </a>
              </Link>
            </td>
            <td>{`${quantity}`}</td>
            <td className="pr-2">{`$${price}`}</td>
            <td>{`$${totalPrice(quantity, price)}`}</td>
          </tr>
        );
      })}
      <TotalPrice />
    </table>
  );
};

const CartWithItems = () => {
  // const testProducts = [testProduct, testProduct, testProduct, testProduct];
  return (
    <div className="flex flex-col">
      <CartTable />
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

CartPage.meta = {
  title: 'My Cart',
  description: 'Your Shopping Cart',
};

export default CartPage;
