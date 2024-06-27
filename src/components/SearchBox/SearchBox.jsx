import style from './SearchBox.module.css';
import ContactForm from '../ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { IoPersonAddOutline } from 'react-icons/io5';
import { useId, useState } from 'react';
import { selectFilter } from '../../redux/filters/selectors';
import { selectContacts, selectError } from '../../redux/contacts/selectors';
import ContactList from '../ContactList/ContactList';

const SearchBox = () => {
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  const searchId = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const toggleFormVisibility = () => {
    setIsFormVisible(false);
    if (value !== '') {
      dispatch(changeFilter(''));
    }
  };

  return (
    <>
      <section className={style.sectionSearch}>
        <div className={style.searchBox}>
          <span>Find contacts by name</span>
          <div className={style.wrapperInput}>
            <input
              className={style.input}
              type="text"
              value={value}
              onChange={e => dispatch(changeFilter(e.target.value))}
              autoFocus
              placeholder="Search..."
              id={searchId}
            ></input>
            {isFormVisible && (
              <button onClick={toggleFormVisibility} className={style.btnAdd}>
                <IoPersonAddOutline className={style.icon} size={26} />
              </button>
            )}
          </div>
          <div
            className={`${style.formContainer} ${
              !isFormVisible ? style.visible : ''
            }`}
          >
            <ContactForm setIsFormVisible={setIsFormVisible} />
          </div>
        </div>
        {contacts.length > 0 && !error && <ContactList isFormVisible={isFormVisible} />}
      </section>
    </>
  );
};
export default SearchBox;
