import React, { Component } from 'react';


class Suggestions extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="suggestions__container">
                    <div className="suggestions__header">
                        <div>Suggestions For You</div>
                    </div>
                    <div className="suggestions__body">
                        <div className="suggestions__friends">
                            
                            <div className="suggestions__username">user_1</div>
                        </div>
                        <div className="suggestions__friends">
                            
                            <div className="suggestions__username">user_2</div>
                        </div>
                        <div className="suggestions__friends">
                            
                            <div className="suggestions__username">user_3</div>
                        </div>
                        <div className="suggestions__friends">
                            
                            <div className="suggestions__username">user_4</div>
                        </div>
                        <div className="suggestions__friends">
                            
                            <div className="suggestions__username">user_5</div>
                        </div>
                        <div className="suggestions__friends">
                            
                            <div className="suggestions__username">user_6</div>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Suggestions;