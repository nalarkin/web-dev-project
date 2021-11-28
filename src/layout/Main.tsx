import Link from 'next/link';

import CartIconWithItems from '../components/cart/CartIconWithItems';
import style from './Main.module.scss';
import { IMetaProps, Meta } from './Meta';

type MainProps = {
  meta: IMetaProps;
  hero: React.ReactNode;
  children: React.ReactNode;
};

type HeaderLinkProps = {
  href: string;
  text: string;
};

const HeaderLink = ({ href, text }: HeaderLinkProps) => {
  return (
    <Link href={href}>
      <a className={style.headerLink}> {text} </a>
    </Link>
  );
};

const Main = ({ meta, hero, children }: MainProps) => {
  return (
    <>
      <Meta {...meta} />
      <div className={style.app}>
        <header className={style.header}>
          <nav className={style.navLinks}>
            <HeaderLink href="/" text="Nate's Notebook" />
            {/* <HeaderLink href="/shop" text="Shop" /> */}
            <HeaderLink href="/products" text="All Products" />
            <HeaderLink href="/about" text="About" />
            <HeaderLink href="/checklist" text="Checklist" />
          </nav>
          <div>
            <Link href="cart">
              <a>
                <CartIconWithItems />
              </a>
            </Link>
          </div>
        </header>
        <main className={style.main}>
          {hero}
          {children}
        </main>
        <footer className={style.footer}>Footer here</footer>
      </div>
    </>
  );
};

export default Main;
