import style from './Error.module.css';
import { useSelector } from 'react-redux';
import { selectError } from '../../redux/contacts/selectors';

const Error = () => {
  const error = useSelector(selectError);
  return <p className={style.error}>{error}</p>;
};
export default Error;
