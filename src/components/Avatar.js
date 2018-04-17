import React from 'react';
import './avatar.css';

const imgSrc = require('../images/avatar.png');

export default class Avatar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="avatar">
                    <img src={imgSrc} alt={this.props.alt} />
                    <span className="username"><a href="#">{this.props.houseUsername}</a></span>
                </div>
            </div>
        );
    }
}
