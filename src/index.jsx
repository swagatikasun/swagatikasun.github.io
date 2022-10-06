import React from 'react';
// import ReactDOM from 'react-dom/client';
import { hydrate, render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );

// react-snap config
// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = document.getElementById('root');
if (root.hasChildNodes()) {
    hydrate(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        root
    );
} else {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
        root
    );
}
