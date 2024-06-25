import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import style from './Layout.module.css';
import Logo from '../Logo/Logo';

export const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <Logo />
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
