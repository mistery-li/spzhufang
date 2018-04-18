import React from 'react';
import './avatar.css';



export default class Avatar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="avatar" onMouseEnter={this.props.mouseHandle}>
                    <img src={this.props.src} alt={this.props.alt} />
                    <span className="username"><a href="#">{this.props.houseUsername}</a></span>
                </div>
            </div>
        );
    }
}
