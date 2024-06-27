import { IoPersonAddOutline } from 'react-icons/io5';
import style from './Welcome.module.css';
import { useState } from 'react';
import AddContactForm from '../AddContactForm/AddContactForm';

export const Welcome = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);

  const toggleFormVisibility = () => {
    setIsFormVisible(false);
  };
  return (
    <div>
      <div className={style.welcome}>
        Welcome
        <br />
        to your personal Phonebook.
        <br />
        Start by adding your
        <br />
        first contact now!
        <br />
        {isFormVisible && (
          <button className={style.btn} onClick={toggleFormVisibility}>
            <IoPersonAddOutline className={style.icon} size={26} />
          </button>
        )}
      </div>
      <div
        className={`${style.formContainer} ${
          !isFormVisible ? style.visible : ''
        }`}
      >
        <AddContactForm setIsFormVisible={setIsFormVisible} />
      </div>
    </div>
  );
};
