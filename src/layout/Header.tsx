import React from 'react';

import Link from 'next/link';

import CartIconWithItems from '../components/cart/CartIconWithItems';
// import style from './Main.module.scss';
import Navigation from './Navigation';

// type HeaderLinkProps = {
//   href: string;
//   text: string;
// };

// // eslint-disable-next-line unused-imports/no-unused-vars
// const HeaderLink = ({ href, text }: HeaderLinkProps) => {
//   return (
//     <Link href={href}>
//       <a className={style.headerLink}> {text} </a>
//     </Link>
//   );
// };

const Header = ({ storeName }: { storeName: string }) => {
  return (
    <header className="h-20 lg:h-32" role="banner">
      <div
        className={`fixed z-20 h-20 lg:h-32 w-full border-b border-gray-200 px-6 md:px-8 md:py-6 lg:pt-8 lg:pb-0 mx-auto bg-white ${'bg-opacity-95'}`}
      >
        <div className="text-center w-full flex justify-between items-center">
          <div>Menu </div>
          <Link href="/">
            <a className="font-black uppercase text-3xl tracking-widest">
              {storeName}
            </a>
          </Link>
          {/* <div>
            <HeaderLink href="/" text="Nate's Notebook" />
            <HeaderLink href="/products" text="All Products" />
            <HeaderLink href="/about" text="About" />
            <HeaderLink href="/checklist" text="Checklist" />
          </div> */}
          <div>
            <Link href="/cart">
              <a>
                <CartIconWithItems />
              </a>
            </Link>
          </div>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
