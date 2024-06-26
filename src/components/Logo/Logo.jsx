import style from './Logo.module.css';
import { MdOutlineContacts } from 'react-icons/md';

const Logo = () => {
  return (
    <header className={style.header}>
      <div className={style.divWrapper}>
        <h1 className={style.title} data-text="Phonebook">
          <MdOutlineContacts className={style.icon} size={50} />
          <br />
          Phonebook
        </h1>
      </div>
    </header>
  );
};
export default Logo;
