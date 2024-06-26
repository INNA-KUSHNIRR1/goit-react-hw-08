import { IoPersonAddOutline } from 'react-icons/io5';
import style from './Welcome.module.css';
import { useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';

export const Welcome = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const toggleFormVisibility = () => {
    setIsFormVisible(false);
  };
  return (
    <div>
      {isFormVisible && (
        <div className={style.welcome}>
          Registration Successful!
          <br />
          🎉🎉🎉
          <br />
          <br />
          Welcome to your personal Phonebook.
          <br />
          Start by adding your first contact now!
          <br />
          <button className={style.btn} onClick={toggleFormVisibility}>
            <IoPersonAddOutline className={style.icon} size={26} />
          </button>
        </div>
      )}

      <div
        className={`${style.formContainer} ${
          !isFormVisible ? style.visible : ''
        }`}
      >
        <ContactForm setIsFormVisible={setIsFormVisible} />
      </div>
    </div>
  );
};
