import React, { Component } from 'react';

class InfoSection extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="info__container">
                    <Avatar src={imageSrc} className="info__image" />
                    <div className="info_content">
                        <div className="info_username"> bhavzzz___</div>
                        <div className="info_description"> Description</div>
                    </div>
                </div>
            </div>);
    }
}

export default InfoSection;