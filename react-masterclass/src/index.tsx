import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {QueryClient} from 'react-query';
import {RecoilRoot} from "recoil";
import {ThemeProvider} from "styled-components";
import {darkTheme} from "./theme";

const root = ReactDOM.createRoot(document.getElementById('root')!);

const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <RecoilRoot>
            <ThemeProvider theme={darkTheme}>
                <App/>
            </ThemeProvider>
        </RecoilRoot>
    </React.StrictMode>
);
