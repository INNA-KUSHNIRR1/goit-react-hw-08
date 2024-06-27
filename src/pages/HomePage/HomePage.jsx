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
            <p className={style.link}>
              <Link to="/contacts">Contacts</Link>
            </p>
          ) : (
            <p className={style.link}>
              <Link to="/register">Register</Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
};
export default HomePage;
