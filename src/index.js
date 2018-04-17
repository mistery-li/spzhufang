import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route} from 'react-router';
import registerServiceWorker from './registerServiceWorker';

import Nav from './components/Nav';
import Search from './components/Search';
import Release from './components/Release';
import Message from './components/Message';
import MessageInfo from './components/MessageInfo';

import { BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render((
  <Router>
    <div className="App">
        <Nav />
        <Route exact={true} path="/" component={App} />
        <Route path="/message" component={Message} />
        <Route path="/search" component={Search} />
        <Route path="/release" component={Release} />
        <Route path="/messageinfo" component={MessageInfo} />
    </div>
  </Router>
),
        document.getElementById('root'));
registerServiceWorker();
