import { NextPage } from 'next';
import { AppProps } from 'next/app';

import Layout from '../layout/Main';
import { IMetaProps } from '../layout/Meta';

import '../styles/main.css';

const defaultMeta = { title: 'Nates Site', description: 'Web Dev Project' };

type NextPageWithLayout = NextPage & {
  info?: IMetaProps;
};

type AppPropsWithInfo = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithInfo) => {
  const pageMetaInfo = Component.info ?? defaultMeta;
  return (
    <Layout meta={pageMetaInfo}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
