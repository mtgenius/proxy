import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import registerServiceWorker from './constants/register-service-worker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
