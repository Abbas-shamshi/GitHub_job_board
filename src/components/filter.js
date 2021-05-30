import React, { Component, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Typography, InputBase, Checkbox, FormControlLabel, Button, Hidden } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import './style.css';

const useStyles = makeStyles((theme) => ({
    inputRoot: {
        color: '#3f51b5',
    },

}));
const Filter = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <form className={classes.root} noValidate autoComplete="off">
                <Container maxWidth="lg" className="filterContainer" >
                    <Grid container alignItems="center" spacing={1} className="headerFilter">
                        <Hidden smDown>
                            <Grid container md={4} xs={4} alignItems="center" justify="center">
                                <Grid item xs={1} >
                                    <FontAwesomeIcon className="filterIcon" icon={faSearch} />
                                </Grid>
                                <Grid item xs={10}>
                                    {/* <TextField fullWidth size="large" placeholder="Placeholder" /> */}
                                    <InputBase
                                        placeholder="Filter by title,companies,experties.."
                                        classes={{
                                            root: classes.inputRoot,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Grid>
                            </Grid>
                        </Hidden>
                        <Grid container md={4} sm={6} xs={8} alignItems="center" justify="center">
                            <Grid item sm={2} xs={1} >
                                <FontAwesomeIcon className="filterIcon" icon={faMapMarker} />
                            </Grid>
                            <Grid item xs={8}>
                                <InputBase
                                    placeholder="Filter by location.."
                                    classes={{
                                        root: classes.inputRoot,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Grid>
                        </Grid>
                        <Grid container md={4} sm={6} xs={4} alignItems="center" justify="center">
                            <Hidden xsDown>

                                <Grid item xs={6} >

                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                // onChange={handleChange}
                                                name="fullTime"
                                                color="default"
                                                style={{
                                                    color: "#3f51b5",
                                                }}
                                            />
                                        }
                                        label={<Typography variant="h7" style={{ color: 'black', fontWeight: "bold" }}>Full Time Only</Typography>}
                                    />
                                </Grid>

                            </Hidden>

                            <Grid item sm={4} xs={8}>
                                <Button variant="contained" color="primary">
                                    Search
                                    </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </form>
        </Fragment>
    );
}

export default Filter;
