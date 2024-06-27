import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/slice';
import style from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { BiHomeAlt2 } from 'react-icons/bi';
import { MdOutlineContacts } from 'react-icons/md';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={style.nav}>
      <NavLink className={style.link} to="/">
        <BiHomeAlt2 className={style.icon} size={26} />
      </NavLink>
      {isLoggedIn && (
        <NavLink className={style.link} to="/contacts">
          <MdOutlineContacts className={style.icon} size={26} />
        </NavLink>
      )}
    </nav>
  );
};
