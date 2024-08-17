// Import the StrictMode component from React for additional checks and warnings in development mode
import { StrictMode } from 'react';

// Import the createRoot function from ReactDOM to render the app
import { createRoot } from 'react-dom/client';

// Import the main App component which serves as the entry point of the application
import App from './App.jsx';

// Import global styles from the index.css file
import './index.css';

// Render the App component inside the root element of the HTML document
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap the App component with StrictMode for development-time checks */}
    <App />
  </StrictMode>,
);
