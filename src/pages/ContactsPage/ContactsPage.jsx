import { useDispatch, useSelector } from 'react-redux';

import SearchBox from '../../components/SearchBox/SearchBox';
import { selectContacts, selectLoading } from '../../redux/contacts/slice';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { Welcome } from '../../components/Welcome/Welcome';
import style from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.contactsPage}>
      {(contacts.length > 0 && !loading && <SearchBox />) ||
        (contacts.length === 0 && !loading && <Welcome />)}
    </div>
  );
};

export default ContactsPage;
