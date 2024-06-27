import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/slice';
import { RestrictedRoute } from './components/RestrictedRoute';
import { PrivateRoute } from './components/PrivateRoute';
import { Toaster } from 'react-hot-toast';
import { Layout } from './components/Layout';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('./pages/RegistrationPage/RegistrationPage'),
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: 'rgb(239 240 246)',
              color: 'rgb(30 34 50)',
              border: '1px solid rgb(31 31 33)',
              padding: '10px',
            },
          },
          error: {
            style: {
              background: 'rgb(239 240 246)',
              color: 'rgb(30 34 50)',
              border: '1px solid rgb(31 31 33)',
              padding: '10px',
            },
          },
        }}
      />
    </Layout>
  );
}

export default App;
