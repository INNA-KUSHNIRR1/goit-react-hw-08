import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import style from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
