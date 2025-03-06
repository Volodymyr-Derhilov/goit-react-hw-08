import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFound from './pages/NotFound/NotFound';
import HomePage from './pages/HomePage/HomePage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import PrivateRoute from './components/routes/PrivateRoute';
import PublicRoute from './components/routes/PublicRoute';

function App() { 
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='login' element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />
        <Route path='register' element={
          <PublicRoute>
            <RegistrationPage />
          </PublicRoute>
          } />
        <Route path='contacts' element={
            <PrivateRoute >
              <ContactsPage />
            </PrivateRoute>
        } />
      </Route>
        <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
