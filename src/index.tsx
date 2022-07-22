import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/css/reset.css';
import './assets/css/app.css';
import {RecoilRoot} from "recoil";
import {DebugObserver} from "./app/atom/debug";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <DebugObserver/>
                <App/>
            </RecoilRoot>
        </QueryClientProvider>
    </React.StrictMode>
);
reportWebVitals();
