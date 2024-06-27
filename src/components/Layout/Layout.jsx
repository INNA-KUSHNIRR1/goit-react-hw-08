import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Footer } from '../Footer/Footer';
import style from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={style.Layout}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
      <Footer />
    </div>
  );
};
