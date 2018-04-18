import React from 'react';
import { match } from 'react-router-dom';

class MessageInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {id} = this.props.match.params;
    console.log(id);
  }
  render() {
    const {id} = this.props;
    return (
      <div>
        房源详情
      </div>
    );
  }
}

export default MessageInfo;