import React from 'react';
import { Map } from 'react-amap';
import './search.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapKey: '5dfb6928f44d20b352e125369ecb7591',
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div>
        <div className="map">
        <Map amapkey={this.state.mapKey}/>
        </div>
        
      </div>
    );
  }
}

export default Search;