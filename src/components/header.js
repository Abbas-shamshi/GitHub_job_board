import React, { Component, Fragment } from 'react';
import { Grid, Switch, Container, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './style.css';

const Header = (props) => {

    return <>
        <Container maxWidth="xl" className="headerContainer">
            <Container maxWidth="lg" className="headeritems">
                <Grid container className="headerContainer" alignItems="center" spacing={1} justify="space-between" >
                    <Link to={{
                        pathname: "/",
                    }} style={{ textDecoration: 'none', color: "inherit" }}>
                        <Grid item className="logo">
                            <Typography variant="h5">devJobs</Typography>
                        </Grid>
                    </Link>
                    <Grid item className="button">
                        <Grid component="label" container alignItems="center" spacing={1}>
                            <Grid item>
                                <FontAwesomeIcon className="icon" icon={faSun} />
                            </Grid>
                            <Grid item>
                                <Switch
                                    color="default"
                                    onChange={props.handleChange}
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
    </>
}

export default Header;
