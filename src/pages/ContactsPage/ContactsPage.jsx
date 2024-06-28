import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import SearchBox from '../../components/SearchBox/SearchBox';
import { selectContacts, selectLoading } from '../../redux/contacts/slice';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { Welcome } from '../../components/Welcome/Welcome';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {loading && <Loader />}
      {contacts.length > 0 ? <SearchBox /> : <Welcome />}
    </div>
  );
};

export default ContactsPage;
