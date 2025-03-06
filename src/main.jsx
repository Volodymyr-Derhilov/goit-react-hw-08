import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "modern-normalize";
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from './redux/store.js';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

// шрифти 
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { PersistGate } from 'redux-persist/integration/react';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
        </Provider>
    </BrowserRouter>
    <Toaster position='top-center' toastOptions={{ duration: 1000 }} />
  </StrictMode>
)
