import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import Home from './layouts/home.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
