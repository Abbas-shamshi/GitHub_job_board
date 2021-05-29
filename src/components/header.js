import React, { Component, Fragment } from 'react';
import { Grid, Switch, Container } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import './style.css';

class Header extends Component {
    handleChange = (event) => {
        console.log("Clicked", event.target.checked)    //returns true and false
    };
    render() {
        return (
            <Fragment>
                <Container maxWidth="xl" className="headerContainer">
                    <Container maxWidth="md" className="headeritems">

                        <Grid container className="headerContainer" alignItems="center" spacing={1} justify="space-between" >
                            <Grid item className="logo">
                                DevJobs
                        </Grid>
                            <Grid item className="button">
                                <Grid component="label" container alignItems="center" spacing={1}>
                                    <Grid item>
                                        <FontAwesomeIcon className="icon" icon={faSun} />
                                    </Grid>
                                    <Grid item>
                                        <Switch
                                            color="default"
                                            onChange={this.handleChange}
                                            inputProps={{ 'aria-label': 'primary checkbox' }} />
                                    </Grid>
                                    <Grid item>
                                        <FontAwesomeIcon className="icon" icon={faMoon} />

                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>

                </Container>
            </Fragment>
        );
    }
}

export default Header;
