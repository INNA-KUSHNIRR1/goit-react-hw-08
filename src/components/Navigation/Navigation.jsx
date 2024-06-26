import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import style from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { BiHomeAlt2 } from 'react-icons/bi';
import { RiContactsBook3Fill } from 'react-icons/ri';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={style.nav}>
      <NavLink className={style.link} to="/">
        <BiHomeAlt2 className={style.icon} size={26} />
      </NavLink>
      {isLoggedIn && (
        <NavLink className={style.link} to="/contacts">
          <RiContactsBook3Fill className={style.icon} size={26} />
        </NavLink>
      )}
    </nav>
  );
};
