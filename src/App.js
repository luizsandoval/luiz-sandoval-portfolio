import React, { useState, useEffect } from 'react';

import { ThemeProvider } from 'styled-components';

import DefaultTheme from './styles/themes/default';
import GlobalStyles from './styles/global';

import Header from './components/Header';
import BottomNavigator from './components/BottomNavigator';

import Home from './pages/Home';
import About from './pages/About';
import Values from './pages/Values';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => console.log('[SECTION]', activeSection)
    , [activeSection]);

    return (
        <ThemeProvider theme={DefaultTheme}>
            <GlobalStyles />
            <Header setActiveSection={setActiveSection} />
            <Home />
            <About />
            <Values />
            <BottomNavigator setActiveSection={setActiveSection} />
        </ThemeProvider>
    );
}

export default App;
