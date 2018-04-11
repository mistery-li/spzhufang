import React from 'react';
import './main.css';

class Main extends React.Component {
  componentDidMount() {
    this.topShowText();
  }
  topShowText() {
    // 回到顶部首页公告话
  }
  render() {
    return (
      <div className="home">
      <div>
      <img className="back" src={require('../images/back.jpg')} alt="back"/>
      </div>
        <div className="desc">
          <h3>这个网站干嘛的？</h3>
          <p>提供实时租房信息，以及通过高德地图直观展示目标房源地点，距离</p>
        </div>
        <div>
        部分房源价格支持筛选功能
        </div>
      </div>
    );
  }
}

export default Main;