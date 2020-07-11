import React from 'react';

import { ThemeProvider } from 'styled-components';

import DefaultTheme from './styles/themes/default';
import GlobalStyles from './styles/global';

import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Beliefs from './pages/Beliefs';

function App() {
    return (
        <ThemeProvider theme={DefaultTheme}>
            <GlobalStyles />
            <Header />
            <Home />
            <About />
            <Beliefs />
        </ThemeProvider>
    );
}

export default App;
