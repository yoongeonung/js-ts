import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from "styled-components";
import {theme} from "./theme";
import {QueryClient, QueryClientProvider} from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const queryClient = new QueryClient();

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>
);
