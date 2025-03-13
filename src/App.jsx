import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router';
import { refreshUser } from './redux/auth/operations';
import { selectIsRefreshing } from './redux/auth/selectors';
import PrivateRoute from './components/routes/PrivateRoute';
import RestrictedRoute from './components/routes/RestrictedRoute';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'))
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'))
const NotFound = lazy(()=> import('./pages/NotFound/NotFound'))

function App() { 
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  return isRefreshing ? null : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={            
           <RestrictedRoute redirectTo='/contacts' component={<LoginPage />} />
          } />
          <Route path='/register' element={
            <RestrictedRoute redirectTo='/contacts' component={<RegistrationPage />} />
            } />
          <Route path='/contacts' element={
              <PrivateRoute >
                <ContactsPage />
              </PrivateRoute>
          } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
