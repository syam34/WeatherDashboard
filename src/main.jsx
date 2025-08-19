import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react'; // Correct import
import ErrorBoundary from './components/ErrorBoundary';
import App from './App.jsx';

const theme = extendTheme(); // Use the default theme or extend it as needed

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider theme={theme}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </ChakraProvider>
);