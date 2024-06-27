import style from './Footer.module.css';
import { FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className={style.footer}>
      <footer>
        <p>Created by Inna Kushnir</p>
        <p>© 2024 Phonebook</p>
        <p>Built with HTML, CSS, JavaScript, React, Redux, Redux Persist</p>
        <p className={style.linkedin}>
          Connect with me on
          <a
            className={style.icon}
            href="https://www.linkedin.com/in/-inna-kushnir-"
            target="_blank"
          >
            <FaLinkedin size={22} />
          </a>
        </p>
      </footer>
    </div>
  );
};
