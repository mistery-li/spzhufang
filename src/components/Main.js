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
        <div className="head">
          <img className="backImg" src={require('../images/back.jpg')}/>
          <div className="title">
            <div className="title-left">北漂，深漂，租房难？来租房网！</div>
            <br />
            <div className="title-right">这里有你满意的房源</div>
          </div>
        </div>

        <div className="content">
          <div className="about">关于该网站</div>
          <div className="desc">
            <span>地图式搜索/上班 路线导航</span>
            <br />
            <span>论坛式最新房源浏览</span>
            <br />
            <span>成为用户发布房源</span>
          </div>
        </div>
        <div className="footer">
          <div className="me">
          <span>学习交流？</span>
          <br />
          <span className="contact">QQ: 853402477</span>
          </div>
          <div className="idea">
          <span>想法来源：某编程学习群大佬      <a href="https://github.com/liguobao/58HouseSearch">GitHub</a></span>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Main;