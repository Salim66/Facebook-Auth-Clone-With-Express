import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContextProvider from './providers/AuthContextProvider';
import LoaderContextProvider from './providers/LoaderContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoaderContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </LoaderContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);