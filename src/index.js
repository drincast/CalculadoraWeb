import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Calculadora from './calculadora';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Calculadora />, document.getElementById('root'));
registerServiceWorker();
