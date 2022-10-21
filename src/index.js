import React from 'react'; //"react" === node_modules/react
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/common.css';
import Router from './Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);


