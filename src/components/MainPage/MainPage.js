import React, { Component } from 'react';


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postArray: [],
            progressBar: "",
        }
    }

    componentDidMount() {
        this.getPost();
    }


    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default MainPage;