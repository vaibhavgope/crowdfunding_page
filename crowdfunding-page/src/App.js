import './App.css'
import React from 'react'
import LandingPage from './components/LandingPage';
import { ThemeProvider, createTheme } from '@material-ui/core';

const theme = createTheme({
    typography: {
        allVariants: {
            color: 'hsl(200, 15%, 8%)'
        },
        fontFamily: 'Roboto'
    },
    palette: {
        primary: {
            main: 'hsl(176, 50%, 47%)'
        },
        secondary: {
            main: 'hsl(176, 72%, 28%)'
        },
    },
    overrides: {
        MuiButton: {
            root: {
                color: 'white',
                borderRadius: '100px',
            },
            contained: {
                color: 'white',
                backgroundColor: 'hsl(176, 50%, 47%)',
                '&:hover': {
                    backgroundColor: 'hsl(176, 72%, 28%)'
                },
            }
        },
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