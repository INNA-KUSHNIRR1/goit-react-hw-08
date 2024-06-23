import style from './Contact.module.css';
import { ImPhone } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { RiDeleteBin6Fill, RiEdit2Fill } from 'react-icons/ri';
import { deleteContact } from '../../redux/contactsOps';
import { useState } from 'react';
import EditContactForm from '../EditContact/EditContact';
import { FaRegUser } from 'react-icons/fa6';
import { changeFilter, selectFilter } from '../../redux/filtersSlice';

const Contact = ({ contact }) => {
  const value = useSelector(selectFilter);
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch(deleteContact(contact.id));
    if (value !== '') {
      dispatch(changeFilter(''));
    }
  };
  const onEdit = () => {
    setIsEdit(true);
    if (value !== '') {
      dispatch(changeFilter(''));
    }
  };
  const handleClearSearch = () => {
    if (value !== '') {
      dispatch(changeFilter(''));
    }
  };
  return (
    <>
      <div className={style.card}>
        <div className={style.user}>
          <h2 className={style.nameUser}>
            <span className={style.spanIconUser}>
              <FaRegUser className={style.iconUser} size={20} />
            </span>
            <span className={style.text}>{contact.name}</span>
          </h2>
          <a
            href={`tel: +${contact.number}`}
            className={style.linkPhone}
            onClick={handleClearSearch}
          >
            <span className={style.spanIcon}>
              <ImPhone className={style.iconPhone} size={16} />
            </span>
            <span className={style.text}>{contact.number}</span>
          </a>
        </div>
        <div className={style.boxBtn}>
          <button className={style.btn} onClick={onEdit}>
            <RiEdit2Fill className={style.iconDelete} size={18} />
          </button>
          <button className={style.btn} onClick={onDelete}>
            <RiDeleteBin6Fill className={style.iconDelete} size={18} />
          </button>
        </div>
      </div>
      {isEdit && <EditContactForm contact={contact} setIsEdit={setIsEdit} />}
    </>
  );
};
export default Contact;
