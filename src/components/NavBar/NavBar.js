import React, { Component } from 'react';
import "./NavBar.css";
import Grid from '@material-ui/core/Grid';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <div className="navbar__barContent">
                    <Grid container>
                        <Grid item xs={2}> </Grid>
                        <Grid item xs={6}>
                        </Grid>
                        <Grid item xs={4}>
                        </Grid>

                    </Grid>
                </div>
            </div>
        );
    }
}

export default NavBar;