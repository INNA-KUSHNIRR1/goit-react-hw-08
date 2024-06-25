import { useSelector } from 'react-redux';
import style from './AppBar.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigation } from '../Navigation/Navigation';

import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={style.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
