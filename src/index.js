import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import ServiceWorker from './registerServiceWorker.js';

ReactDOM.render(<App></App>, document.getElementById('root'));
ServiceWorker();
