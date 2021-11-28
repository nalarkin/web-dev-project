import { NextPage } from 'next';
import { AppProps } from 'next/app';

import AuthProvider from '../components/auth/AuthProvider';
import CartUIProvider from '../components/cart/CardUIProvider';
import CartProvider from '../components/cart/CartProvider';
import ToastProvider from '../components/Toast';
// eslint-disable-next-line import/no-named-as-default
import Layout from '../layout/Main';
import { IMetaProps } from '../layout/Meta';

import '../styles/main.css';

const defaultMeta = { title: 'Nates Site', description: 'Web Dev Project' };

type NextPageWithLayout = NextPage & {
  meta?: IMetaProps;
  hero?: React.ReactNode;
};

type AppPropsWithInfo = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithInfo) => {
  const pageMetaInfo = Component.meta ?? defaultMeta;
  const pageHero = Component.hero ?? null;
  return (
    <ToastProvider>
      <AuthProvider>
        <CartProvider>
          <CartUIProvider>
            <Layout meta={pageMetaInfo} hero={pageHero}>
              <Component {...pageProps} />
            </Layout>
          </CartUIProvider>
        </CartProvider>
      </AuthProvider>
    </ToastProvider>
  );
};

export default MyApp;
