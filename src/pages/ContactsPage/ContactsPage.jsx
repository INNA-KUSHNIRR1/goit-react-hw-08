import { useDispatch, useSelector } from 'react-redux';
import ContactList from '../../components/ContactList/ContactList';
import Loader from '../../components/Loader/Loader';
import SearchBox from '../../components/SearchBox/SearchBox';
import {
  selectContacts,
  selectError,
  selectLoading,
} from '../../redux/contacts/selectors';
import Error from '../../components/Error/Error';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <SearchBox />
      {loading && <Loader />}
      {error && <Error />}
      {contacts.length > 0 && !error && <ContactList />}
    </div>
  );
};
