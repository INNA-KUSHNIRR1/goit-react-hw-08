import style from './Contact.module.css';
import { ImPhone } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { RiEdit2Fill } from 'react-icons/ri';
import { FaRegCircleUser } from 'react-icons/fa6';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <div className={style.card}>
      <div className={style.user}>
        <h2 className={style.nameUser}>
          <span className={style.spanIconUser}>
            <FaRegCircleUser className={style.iconUser} size={30} />
          </span>
          <span className={style.text}>{contact.name}</span>
        </h2>
        <a href={`tel: +${contact.number}`} className={style.linkPhone}>
          <span className={style.spanIcon}>
            <ImPhone className={style.iconPhone} size={16} />
          </span>
          <span className={style.text}>{contact.number}</span>
        </a>
      </div>
      <div className={style.boxBtn}>
        <button className={style.btn}>
          <RiEdit2Fill size={18} />
        </button>
        <button className={style.btn} onClick={onDelete}>
          <RiDeleteBin6Fill className={style.iconDelete} size={18} />
        </button>
      </div>
    </div>
  );
};
export default Contact;
