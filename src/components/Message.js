import React from 'react';
import './message.css';

class Message extends React.Component {
  render() {
    return (
      <div className="msg-box">
        <div>
          <img src={require('../images/avatar.png')} />
        </div>
      </div>
    );
  }
}

export default Message;