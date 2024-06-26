import style from './HomePage.module.css';
import Logo from '../../components/Logo/Logo';
import { Link } from 'react-router-dom';

const HomePage = () => {
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
        <p className={style.link}>
          <Link to="/register">Register</Link>
        </p>
      </div>
    </>
  );
};
export default HomePage;
