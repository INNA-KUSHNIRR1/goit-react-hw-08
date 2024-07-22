import style from './HomePage.module.css';
import Logo from '../../components/Logo/Logo';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/slice';

const HomePage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <div className={style.container}>
        <Logo />
        <h1 className={style.title}>
          Welcome to Your Personal PhoneBook! <br />
          <br />
          Easily store and manage your contacts. <br />
          <br />
          Start adding now!
        </h1>
        <div className={style.boxLink}>
          {isLoggedIn ? (
            <Link className={style.link} to="/contacts">
              Contacts
            </Link>
          ) : (
            <>
              <Link className={style.link} to="/register">
                Register
              </Link>
              <Link className={style.link} to="/login">
                Log In
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default HomePage;
