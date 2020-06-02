import './index.css';
import store from './Redux/Redux-Store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

ReactDOM.render(
    // * PROVIDER - ADD STORE TO CONTEXT (CONTEXT API)
    <Provider store={store} >
        <App />
    </Provider >, document.getElementById('root'));

serviceWorker.unregister();

