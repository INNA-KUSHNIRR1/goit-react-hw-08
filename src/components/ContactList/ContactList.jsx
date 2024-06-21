import style from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <section className={style.sectionList}>
      <ul className={style.list}>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={style.item}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default ContactList;
