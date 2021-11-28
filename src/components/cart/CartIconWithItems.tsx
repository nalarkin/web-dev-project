import CartIcon from './CartIcon';
import { useCart } from './CartProvider';

export default function CartIconWithItems() {
  const { items } = useCart();
  const itemsInCart = items.length;

  return (
    <>
      <div className="">
        <CartIcon />

        <div
          className={`bg-blue-700 text-xs rounded-full leading-none text-white absolute bottom-3 right-1 flex items-center justify-center transform translate-y-1/2 transition-all ${
            items.length > 0 ? 'h-4 w-4' : 'h-0 w-0 overflow-hidden'
          }`}
          aria-hidden
        >
          {itemsInCart > 0 ? itemsInCart : null}
        </div>
      </div>
      <span className="sr-only">Cart, {itemsInCart} items</span>
    </>
  );
}
