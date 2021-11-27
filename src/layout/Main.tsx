import style from './Main.module.scss';
import { IMetaProps, Meta } from './Meta';

type MainProps = {
  meta: IMetaProps;
  children: React.ReactNode;
};

const Main = ({ meta, children }: MainProps) => {
  return (
    <>
      <Meta {...meta} />
      <div className={style.app}>
        <header className={style.header}>Header</header>
        <main className={style.main}>{children}</main>
        <footer className={style.footer}>Footer here</footer>
      </div>
    </>
  );
};

export default Main;
