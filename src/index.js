import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import NotFoundPage from 'components/NotFoundPage/NotFoundPage';
import './index.css';
import './utils/reset.module.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const validPaths = ['', 'whyus', 'service', 'portfolio', 'contact', 'faq'];
const currentPath = window.location.pathname.split('/')[2];

if (!validPaths.includes(currentPath)) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <NotFoundPage />
    </React.StrictMode>
  );
}
