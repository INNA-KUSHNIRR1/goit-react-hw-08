import { IoPersonAddOutline } from 'react-icons/io5';
import style from './Welcome.module.css';
import { useState } from 'react';
import AddContactForm from '../AddContactForm/AddContactForm';
import { GoCheckCircle } from 'react-icons/go';

export const Welcome = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);

  const toggleFormVisibility = () => {
    setIsFormVisible(false);
  };
  return (
    <div>
      <div className={style.welcome}>
        <GoCheckCircle fill="rgba(106, 240, 233, 0.5)" size={32} />
        <br />
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
