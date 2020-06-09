import './index.css';
import store from './Redux/Redux-Store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';

ReactDOM.render(
    // * PROVIDER - ADD STORE TO CONTEXT (CONTEXT API)
    <Provider store={store} >
        <App />
    </Provider >, document.getElementById('root'));

serviceWorker.unregister();

