import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Newapp from './NewApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Newapp />, document.getElementById('root'));
registerServiceWorker();
