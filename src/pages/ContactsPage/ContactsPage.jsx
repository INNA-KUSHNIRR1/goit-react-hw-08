import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import SearchBox from '../../components/SearchBox/SearchBox';
import {
  selectContacts,
  selectError,
  selectLoading,
} from '../../redux/contacts/slice';
import Error from '../../components/Error/Error';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { Welcome } from '../../components/Welcome/Welcome';



const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div >
      {loading && <Loader />}
      {contacts.length > 0 ? <SearchBox /> : <Welcome />}
      {error && <Error />}
    </div>
  );
};

export default ContactsPage;
