import Footer from './Footer';
import Header from './Header';
import style from './Main.module.scss';
import { IMetaProps, Meta } from './Meta';

type MainProps = {
  meta: IMetaProps;
  hero: React.ReactNode;
  children: React.ReactNode;
};

const Main = ({ meta, hero, children }: MainProps) => {
  return (
    <>
      <Meta {...meta} />
      <div className={style.app}>
        <Header storeName="Nate's Notebook" />
        <main className="relative bg-gray-50">
          {hero}
          <div className="mx-auto max-w-7xl p-4 md:py-5 md:px-8 relative">
            {children}
          </div>
        </main>
        <div className={style.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;
