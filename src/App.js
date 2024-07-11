
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react'; // Ensure @emotion/react is installed
import { darkTheme } from './utils/Themes';
import Router from './Router';
import Navbar from './Pages/Nanbar';

function App() {
  return (
    // <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    //</ThemeProvider>
  );
}

export default App;
