import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from "styled-components";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const darkTheme = {
    textColor: "whitesmoke",
    backgroundColor: "#111"
}

const whiteTheme = {
    textColor: "#111",
    backgroundColor: "whitesmoke"
}

root.render(
    <ThemeProvider theme={whiteTheme}>
        <App />
    </ThemeProvider>
);
