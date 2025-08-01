import React from 'react';
import ReactDOM from 'react-dom/client'; // Assuming you're also using ReactDOM
import App from './TodoApp'; // Assuming you have an App component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
