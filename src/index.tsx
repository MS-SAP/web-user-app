import React from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from './context/ApiContext';
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';
import { ModalProvider } from './context/ModalContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ApiProvider>
          <UserProvider>
            <ModalProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </ModalProvider>
          </UserProvider>
        </ApiProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
