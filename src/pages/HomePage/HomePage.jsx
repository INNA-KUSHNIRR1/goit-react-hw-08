import style from './HomePage.module.css';
import Logo from '../../components/Logo/Logo';

const HomePage = () => {
  return (
    <>
      <div className={style.container}>
        <Logo />
        {/* <h1 className={style.title}>
          Contact manager welcome page
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1> */}
      </div>
    </>
  );
};
export default HomePage;
