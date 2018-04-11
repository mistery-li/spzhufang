import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';

class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul className="nav">
        <li><Link to="/">首页</Link></li>
        <li><Link to="/message">信息</Link></li>
        <li><Link to="/search">搜索</Link></li>
        <li><Link to="/release">发布</Link></li>
      </ul>
      </div>
    );
  }
}

export default Nav;