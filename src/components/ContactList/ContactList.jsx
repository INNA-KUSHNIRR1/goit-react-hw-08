import style from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const inAlphabetContacts = contacts.toSorted((a, b) =>
    a.name.localeCompare(b.name),
  );
  return (
    <section className={style.sectionList}>
      <ul className={style.list}>
        {inAlphabetContacts.map(contact => {
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
