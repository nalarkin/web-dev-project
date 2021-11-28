import Header from './Header';
import style from './Main.module.scss';
import { IMetaProps, Meta } from './Meta';

type MainProps = {
  meta: IMetaProps;
  hero: React.ReactNode;
  children: React.ReactNode;
};

const Main = ({ meta, children }: MainProps) => {
  return (
    <>
      <Meta {...meta} />
      <div className={style.app}>
        <Header storeName="Nate's Notebook" />
        <main className="relative bg-gray-50 gradient">
          {/* {hero} */}
          <div className="mx-auto max-w-7xl p-4 md:py-5 md:px-8">
            {children}
          </div>
        </main>
        <footer className={style.footer}>Footer here</footer>
      </div>
    </>
  );
};

export default Main;
