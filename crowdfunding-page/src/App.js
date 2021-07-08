import './App.css'
import React from 'react'
import LandingPage from './components/LandingPage';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';

const theme = createMuiTheme({
    typography: {
        allVariants: {
            color: 'hsl(200, 15%, 8%)'
        },
        fontFamily: 'Roboto'
    },
    palette: {
        primary: { main: cyan[500] },
        secondary: { main: cyan[700] },
    },
});
function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <LandingPage />
            </div>
        </ThemeProvider>
    );
}

export default App;