import style from './HomePage.module.css';

export const HomePage = () => {
  return (
    <>
      <div style={style.container}>
        <h1 style={style.title}>
          Contact manager welcome page
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
};
