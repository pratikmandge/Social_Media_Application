import {React} from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';
reportWebVitals();


/* This code is rendering the React component `<App />` into the HTML element with the ID of "root". */
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);