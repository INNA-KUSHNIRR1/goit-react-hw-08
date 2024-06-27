import style from './ContactList.module.css';
import Contact from '../Contact/Contact';

import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = ({ isFormVisible }) => {
  const contacts = useSelector(selectFilteredContacts);
  const inAlphabetContacts = contacts.toSorted((a, b) =>
    a.name.localeCompare(b.name),
  );
  return (
    <section className={style.sectionList}>
      <ul className={isFormVisible ? style.list : style.listHeight}>
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
