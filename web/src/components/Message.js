import React from "react";
import Avatar from "./Avatar";
import "./message.css";
import Loading from "./Loading";

const imgSrc = require("../images/avatar.png");

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      lastPageY: window.pageYOffset,
      clsName: "",
      loading: true,
      page: 1,
      houses: [
        {
          id: 1,
          houseUsername: "liii",
          imgSrc: imgSrc,
          imgDesc: "avatar",
          release_date: "4月11日",
          release_time: "16:21",
          location: "望京南湖中园一区",
          houseInfo:
            "本人女生在汉威国际工作  资金有限  希望能从房主手中直租  26号回京  希望月底可以入住一个人住肯定会爱惜您的房子预算在3500左右最近中介带着看了设计师的房子不知道有没有房主直租的附近其他小区也可以接受两站地铁或者30分钟走路的路程要安全一定要安全 一个人住安全最重要了"
        },
        {
          id: 2,
          houseUsername: "liii",
          imgSrc: imgSrc,
          imgDesc: "avatar",
          release_date: "4月11日",
          release_time: "16:21",
          location: "望京南湖中园一区",
          houseInfo:
            "本人女生在汉威国际工作  资金有限  希望能从房主手中直租  26号回京  希望月底可以入住一个人住肯定会爱惜您的房子预算在3500左右最近中介带着看了设计师的房子不知道有没有房主直租的附近其他小区也可以接受两站地铁或者30分钟走路的路程要安全一定要安全 一个人住安全最重要了"
        },
        {
          id: 3,
          houseUsername: "liii",
          imgSrc: imgSrc,
          imgDesc: "avatar",
          release_date: "4月11日",
          release_time: "16:21",
          location: "望京南湖中园一区",
          houseInfo:
            "本人女生在汉威国际工作  资金有限  希望能从房主手中直租  26号回京  希望月底可以入住一个人住肯定会爱惜您的房子预算在3500左右最近中介带着看了设计师的房子不知道有没有房主直租的附近其他小区也可以接受两站地铁或者30分钟走路的路程要安全一定要安全 一个人住安全最重要了"
        },
        {
          id: 4,
          houseUsername: "liii",
          imgSrc: imgSrc,
          imgDesc: "avatar",
          release_date: "4月11日",
          release_time: "16:21",
          location: "望京南湖中园一区",
          houseInfo:
            "本人女生在汉威国际工作  资金有限  希望能从房主手中直租  26号回京  希望月底可以入住一个人住肯定会爱惜您的房子预算在3500左右最近中介带着看了设计师的房子不知道有没有房主直租的附近其他小区也可以接受两站地铁或者30分钟走路的路程要安全一定要安全 一个人住安全最重要了"
        },
        {
          id: 5,
          houseUsername: "liii",
          imgSrc: imgSrc,
          imgDesc: "avatar",
          release_date: "4月11日",
          release_time: "16:21",
          location: "望京南湖中园一区",
          houseInfo:
            "本人女生在汉威国际工作  资金有限  希望能从房主手中直租  26号回京  希望月底可以入住一个人住肯定会爱惜您的房子预算在3500左右最近中介带着看了设计师的房子不知道有没有房主直租的附近其他小区也可以接受两站地铁或者30分钟走路的路程要安全一定要安全 一个人住安全最重要了"
        },
        {
          id: 7,
          houseUsername: "liii",
          imgSrc: imgSrc,
          imgDesc: "avatar",
          release_date: "4月11日",
          release_time: "16:21",
          location: "望京南湖中园一区",
          houseInfo:
            "本人女生在汉威国际工作  资金有限  希望能从房主手中直租  26号回京  希望月底可以入住一个人住肯定会爱惜您的房子预算在3500左右最近中介带着看了设计师的房子不知道有没有房主直租的附近其他小区也可以接受两站地铁或者30分钟走路的路程要安全一定要安全 一个人住安全最重要了"
        },
        {
          id: 8,
          houseUsername: "liii",
          imgSrc: imgSrc,
          imgDesc: "avatar",
          release_date: "4月11日",
          release_time: "16:21",
          location: "望京南湖中园一区",
          houseInfo:
            "本人女生在汉威国际工作  资金有限  希望能从房主手中直租  26号回京  希望月底可以入住一个人住肯定会爱惜您的房子预算在3500左右最近中介带着看了设计师的房子不知道有没有房主直租的附近其他小区也可以接受两站地铁或者30分钟走路的路程要安全一定要安全 一个人住安全最重要了"
        }
      ]
    };
  }
  // 初始化鉴定滚动实践
  componentDidMount() {
    fetch("https://api.douban.com/v2/book/1220562", {
      method: "POST",
      mode: "no-cors"
    }).then(response => {
      console.log(response);
    });
    this.showMore(this.state.houses);
    console.log("url", this.props.location.pathname);
    // 监听scroll
    // this.scroll.addEventListener("scroll", this.onScrollHandle);
    this.setState({
      loading: false
    })
  }
  componenWillUnmount() {
    // this.scroll.removeEventListener("scroll", this.onScrollHandle);
  }
  // 下拉展示
  showMore(houses) {
    if (!this.state.showMore && this.state.lastPageY === window.scrollY) {
      return;
    } else {
      this.setState({
        lastPageY: window.scrollY
      });
    }
    if (
      window.scrollY + window.innerHeight + 200 >
      document.body.offsetHeight
    ) {
      this.mergeProps(houses);
    }
  }
  mergeProps(houses) {
    this.showMoreHouse(houses);
  }
  showMoreHouse(houses) {
    this.setState({
      houses: this.state.houses.concat(houses)
    });
  }
  houseInfoCollect(index) {
    // 收藏
    // 点击收藏，再次点击取消收藏
    // 先缓存收藏状态，延迟写入数据库
  }
  // 城市筛选
  selectCity() {
    let filterHouse = this.state.houses.filter(item => {
      return item === "shenzhen";
    });

    this.setState({
      houses: filterHouse,
      clsName: "selected"
    });
  }
  showTips() {
    console.log("mouseenter");
  }
  render() {
    const clsName = this.state.clsName;
    const housesInfo = this.state.houses.map((item, index) => {
      return (
        <div className="msg" key={index}>
          <div className="announcer">
            <Avatar
              mouseHandle={this.showTips}
              src={item.imgSrc}
              alt={item.imgDesc}
              houseUsername={item.houseUsername}
            />
          </div>
          <div className="announce-time">
            <span className="date">{item.release_date}</span>
            <span className="time">{item.release_time}</span>
            <a
              className="collection"
              href="#"
              onClick={() => this.houseInfoCollect(index)}
            >
              收藏
            </a>
          </div>
          <div className="msg-info">
            <div className="location">
              <a href={`./msgInfo/${item.id}`}>{item.location}</a>
            </div>
            <p className="msg-desc">{item.houseInfo}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="message">
        <div className="city">
          <div className="hot-city">热门城市</div>
          <ul>
            <li>
              <a href="#" className={clsName} onClick={() => this.selectCity()}>
                深圳
              </a>
            </li>
            <li>
              <a href="#" className={clsName} onClick={() => this.selectCity()}>
                广州
              </a>
            </li>
            <li>
              <a href="#" className={clsName} onClick={() => this.selectCity()}>
                北京
              </a>
            </li>
            <li>
              <a href="#" className={clsName} onClick={() => this.selectCity()}>
                上海
              </a>
            </li>
          </ul>
        </div>
        <div className="msg-box">
          <div className="rel-title">最新发布</div>
          <div>{housesInfo}</div>
          <Loading loading={this.state.loading} />
        </div>
      </div>
    );
  }
}

export default Message;
