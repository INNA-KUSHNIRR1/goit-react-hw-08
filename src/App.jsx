import './App.css';
import Logo from './components/Logo/Logo';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import {
  selectContacts,
  selectError,
  selectLoading,
} from './redux/contactsSlice';
import Loader from './components/Loader/Loader';
import Error from './components/Error/Error';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="app">
      <div className="container">
        <div className="content">
          <Logo />
          <SearchBox />
          {loading && <Loader />}
          {error && <Error />}
          {contacts.length > 0 && !error && <ContactList />}
        </div>
      </div>
    </div>
  );
}

export default App;
