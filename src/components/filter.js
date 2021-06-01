import React, { Component, Fragment, useState } from 'react';
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

const Filter = (props) => {
    const classes = useStyles();
    const [descriptionData, setdescriptionData] = useState(0);
    const [locationData, setlocationData] = useState(0);
    const [jobType, setjobType] = useState(0);

    const onFilterChange = (event) => {
        setdescriptionData(event.target.value)
        console.log(event.target.value);
    };
    const onLocationChange = (event) => {
        setlocationData(event.target.value)
        console.log(event.target.value);
    };
    const onJobTypeChange = (event) => {
        setjobType(event.target.checked)
        console.log(event.target.checked);
    };
    const onClick = () => {
        let values = { descriptionData, locationData, jobType }
        props.onFilterValues(values);
        console.log(props);
    };
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
                                        onChange={onFilterChange}
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
                                    onChange={onLocationChange}
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
                                                onChange={onJobTypeChange}
                                            />
                                        }
                                        label={<Typography variant="h7" style={{ color: 'black', fontWeight: "bold" }}>Full Time Only</Typography>}
                                    />
                                </Grid>
                            </Hidden>
                            <Grid item sm={4} xs={8}>
                                <Button variant="contained" color="primary" onClick={onClick}>
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
