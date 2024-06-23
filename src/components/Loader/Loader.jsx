import style from './Loader.module.css';
import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={style.loader}>
      <RotatingLines
        visible={true}
        height="50"
        width="50"
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
export default Loader;
