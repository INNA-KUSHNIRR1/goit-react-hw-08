import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import style from './UserMenu.module.css';
import { logout } from '../../redux/auth/operations';
import { MdLogout } from 'react-icons/md';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={style.wrapper}>
      <p className={style.username}>Welcome, {user.name}!</p>
      <button
        className={style.btn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        <MdLogout className={style.icon} size={26} />
      </button>
    </div>
  );
};
