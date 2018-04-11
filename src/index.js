import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

import Main from './components/Main';
import Search from './components/Search';
import Release from './components/Release';
import Message from './components/Message';

import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render((
  <Router>
    <div>
        <Route path="/" component={App} />
        <Route path="/message" component={Message} />
        <Route path="/search" component={Search} />
        <Route path="/release" component={Release} />
    </div>
  </Router>
),
        document.getElementById('root'));
registerServiceWorker();
